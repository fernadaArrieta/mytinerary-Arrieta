const User = require("../models/usermodel");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto"); //NPM CRYPTO
const nodemailer = require("nodemailer"); //NPM NODEMAILER
const jwt = require("jsonwebtoken");

const sendEmail = async (email, uniqueString) => {
  //FUNCION ENCARGADA DE ENVIAR EL EMAIL

  const transporter = nodemailer.createTransport({
    //DEFINIMOS EL TRASPORTE UTILIZANDO NODEMAILER
    host: "smtp.gmail.com", //DEFINIMOS LO PARAMETROS NECESARIOS
    port: 465,
    secure: true,
    auth: {
      user: "testmytinerary01@gmail.com", //DEFINIMOS LOS DATOS DE AUTORIZACION DE NUESTRO PROVEEDOR DE
      pass: "benja2103", //CORREO ELECTRONICO, CONFIGURAR CUAENTAS PARA PERMIR EL USO DE APPS
    }, //CONFIGURACIONES DE GMAIL
  });

  // EN ESTA SECCION LOS PARAMETROS DEL MAIL
  let sender = "testmytinerary01@gmail.com";
  let mailOptions = {
    from: sender, //DE QUIEN
    to: email, //A QUIEN
    subject: "Verificacion de email usuario ", //EL ASUNTO Y EN HTML EL TEMPLATE PARA EL CUERPO DE EMAIL Y EL LINK DE VERIFICACION
    html: `
      <div >
      <h1 style="color:red">Presiona <a href=http://localhost:4000/api/verify/${uniqueString}>aqui</a> para confirma tu email. Gracias </h1>
      </div>
      `,
  };
  await transporter.sendMail(mailOptions, function (error, response) {
    //SE REALIZA EL ENVIO
    if (error) {
      console.log(error);
    } else {
      console.log("Mensaje enviado");
    }
  });
};

const usersControllers = {
  verifyEmail: async (req, res) => {
    const { uniqueString } = req.params; //EXTRAE EL EL STRING UNICO DEL LINK

    const user = await User.findOne({ uniqueString: uniqueString });
    console.log(user); //BUSCA AL USUARIO CORRESPONDIENTE AL LINK
    if (user) {
      user.emailVerificado = true; //COLOCA EL CAMPO emailVerified en true
      await user.save();
      res.redirect("http://localhost:3000/"); //REDIRECCIONA AL USUARIO A UNA RUTA DEFINIDA
      //return  res.json({success:true, response:"Su email se ha verificado correctamente"})
    } else {
      res.json({ success: false, response: "Su email no se ha verificado" });
    }
  },
  signUpUsers: async (req, res) => {
    let {
      firstName,
      lastName,
      email,
      password,
      profilePicture,
      selectCountry,
      from,
    } = req.body.userData;

    try {
      const usuarioExiste = await User.findOne({ email }); //BUSCAR SI EL USUARIO YA EXISTE EN DB

      if (usuarioExiste) {
        console.log(usuarioExiste.from.indexOf(from));
        if (usuarioExiste.from.indexOf(from) === 0) {
          //INDEXOF = 0 EL VALOR EXISTE EN EL INDICE EQ A TRUE -1 NO EXITE EQ A FALSE
          res.json({
            success: false,
            from: "form-Signup",
            message:
              "Ya has realizado tu SignUp de esta forma por favor realiza SignIn",
          });
        } else {
          const contraseñaHasheada = bcryptjs.hashSync(password, 10);

          usuarioExiste.from.push(from);
          usuarioExiste.password.push(contraseñaHasheada);
          if (from === "form-Signup") {
            await usuarioExiste.save();
            await sendEmail(email, usuarioExiste.uniqueString);
            res.json({
              success: true,
              from: "form-Signup", //RESPONDE CON EL TOKEN Y EL NUEVO USUARIO
              message:
                "Te enviamos un email para validarlo, por favor verifica tu casilla para completar el signUp y agregarlo a tus metodos de SignIN ",
            });
          } else {
            usuarioExiste.save();

            res.json({
              success: true,
              from: "form-Signup",
              message:
                "Agregamos " + from + " a tus medios para realizar signIn",
            });
          } // EN ESTE PUNTO SI EXITE RESPONDE FALSE
        }
      } else {
        //SI EL USUARIO NO ESXITE

        const contraseñaHasheada = bcryptjs.hashSync(password, 10); //LO CREA Y ENCRIPTA LA CONTRASEÑA
        // CREA UN NUEVO OBJETO DE PERSONAS CON SU USUARIO Y CONTRASEÑA (YA ENCRIPTADA)
        const nuevoUsuario = await new User({
          firstName,
          lastName,
          email,
          password: [contraseñaHasheada],
          profilePicture,
          selectCountry,
          uniqueString: crypto.randomBytes(15).toString("hex"),
          emailVerificado: false,
          from: [from],
        });

        //SE LO ASIGNA AL USUARIO NUEVO
        if (from !== "form-Signup") {
          //SI LA PETICION PROVIENE DE CUENTA GOOGLE
          await nuevoUsuario.save();
          res.json({
            success: true,
            from: "form-Signup",
            message: "Felicitaciones se ha creado tu usuario con " + from,
          }); // AGREGAMOS MENSAJE DE VERIFICACION
        } else {
          //PASAR EMAIL VERIFICADO A FALSE
          //ENVIARLE EL E MAIL PARA VERIFICAR
          await nuevoUsuario.save();
          await sendEmail(email, nuevoUsuario.uniqueString);
          res.json({
            success: true,
            from: "form-Signup",
            message:
              "Te enviamos un email para validarlo, por favor verifica tu casilla para completar el signUp ",
          }); // AGREGAMOS MENSAJE DE VERIFICACION
        }
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Algo a salido mal intentalo en unos minutos",
      }); //CAPTURA EL ERROR
    }
  },
  signInUser: async (req, res) => {
    const { email, password, from } = req.body.logedUser

    try {
      const usuarioExiste = await User.findOne({ email });
      console.log(usuarioExiste);
      if (!usuarioExiste) {
        // PRIMERO VERIFICA QUE EL USUARIO EXISTA
        res.json({
          success: false,
          message: "Tu usuarios no a sido registrado realiza signIn",
        });
      } else {
        if (from !== "form-Signin") {
          let contraseñaCoincide = usuarioExiste.password.filter((pass) =>
            bcryptjs.compareSync(password, pass)
          );

          if (contraseñaCoincide.length > 0) {
            //TECERO VERIFICA CONTRASEÑA

            const userData = {
              id: usuarioExiste._id,
              firstName: usuarioExiste.firstName,
              email: usuarioExiste.email,
              from: usuarioExiste.from,
            };
            await usuarioExiste.save();

            const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, {
              expiresIn: 60 * 60 * 24,
            });

            res.json({
              success: true,
              from: from,
              response: { token, userData },
              message: "Bienvenido nuevamente " + userData.firstName,
            });
          } else {
            res.json({
              success: false,
              from: from,
              message:
                "No has realizado el registro con " +
                from +
                "si quieres ingresar con este metodo debes hacer el signUp con " +
                from,
            });
          }
        } else {
          if (usuarioExiste.emailVerificado) {
            let contraseñaCoincide = usuarioExiste.password.filter((pass) =>
              bcryptjs.compareSync(password, pass)
            );
            console.log(contraseñaCoincide);
            console.log(
              "resultado de busqueda de contrasela: " +
                (contraseñaCoincide.length > 0)
            );

            if (contraseñaCoincide.length > 0) {
              const userData = {
                id: usuarioExiste._id,
                firstName: usuarioExiste.firstName,
                email: usuarioExiste.email,
                from: usuarioExiste.from,
              };

              const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, {
                expiresIn: 60 * 60 * 24,
              });

              res.json({
                success: true,
                from: from,
                response: { token, userData },
                message: "Bienvenido nuevamente " + userData.firstName,
              });
            } else {
              res.json({
                success: false,
                from: from,
                message: "El usuario o el password no coinciden",
              });
            }
          } else {
            res.json({
              success: false,
              from: from,
              message:
                "No has verificado tu email, por favor verifica ti casilla de emails para completar tu signUp",
            });
          }
        } //SI NO ESTA VERIFICADO
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Algo a salido mal intentalo en unos minutos",
      });
    }
  },
  signOutUser: async (req, res) => {
    const email = req.body.closeuser;
    const user = await User.findOne({ email });
    await user.save();
    res.json(console.log("sesion cerrada " + email));
  },
};

module.exports = usersControllers;
