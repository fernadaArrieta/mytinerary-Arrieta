const User = require("../models/usermodel");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer"); 
const jwt = require("jsonwebtoken");

const sendEmail = async (email, uniqueString) => {
  //FUNCION ENCARGADA DE ENVIAR EL EMAIL
console.log(email)
  const transporter = nodemailer.createTransport({
    //DEFINIMOS EL TRASPORTE UTILIZANDO NODEMAILER
    host: "smtp.gmail.com", //DEFINIMOS LO PARAMETROS NECESARIOS
    port: 465,
    secure: true,
    auth: {
      user: "testmytinerary01@gmail.com", //DEFINIMOS LOS DATOS DE AUTORIZACION DE NUESTRO PROVEEDOR DE
      pass: "benja2103", //CORREO ELECTRONICO, CONFIGURAR CUAENTAS PARA PERMIR EL USO DE APPS
    }, //CONFIGURACIONES DE GMAIL
    tls: {
      rejectUnauthorized: false
  }
  });

  // EN ESTA SECCION LOS PARAMETROS DEL MAIL
  let sender = "testmytinerary01@gmail.com";
  let mailOptions = {
    from: sender, //DE QUIEN
    to: email, //A QUIEN
    subject:"MyTinerary's || Verify your account " , //EL ASUNTO Y EN HTML EL TEMPLATE PARA EL CUERPO DE EMAIL Y EL LINK DE VERIFICACION
    html: `
      <div >
      <h1>MyTinerary</h1>
      <h2 style="color:#e7958e">Press <a href=http://localhost:4000/api/verify/${uniqueString}>"here"</a> to confirm your email. Thank you</h2>
      </div>
      `,
  };
  await transporter.sendMail(mailOptions, function (error, response) {
    //SE REALIZA EL ENVIO
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent");
    }
  });
};

const usersControllers = {
  verifyEmail: async (req, res) => {
    const { uniqueString } = req.params; //EXTRAE EL EL STRING UNICO DEL LINK

    const user = await User.findOne({ uniqueString: uniqueString });
   ; //BUSCA AL USUARIO CORRESPONDIENTE AL LINK
    if (user) {
      user.emailVerificado = true; //COLOCA EL CAMPO emailVerified en true
      await user.save();
      res.redirect("http://localhost:3000/"); //REDIRECCIONA AL USUARIO A UNA RUTA DEFINIDA
      //return  res.json({success:true, response:"Su email se ha verificado correctamente"})
    } else {
      res.json({ success: false, response: "your email has not been verified" });
    }
  },
  signUpUsers: async (req, res) => {
    ;
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
       
        if (usuarioExiste.from.indexOf(from) !== -1) {
          //INDEXOF = 0 EL VALOR EXISTE EN EL INDICE EQ A TRUE -1 NO EXITE EQ A FALSE
          res.json({
            success: false,
            from: "form-Signup",
            message:
            "You are registered. Do you want to go SingIn page?",
          });
        } else {
          const contraseñaHasheada = bcryptjs.hashSync(password, 10);

          usuarioExiste.from.push(from);
          usuarioExiste.password.push(contraseñaHasheada);

          if (from === "form-Signup") {
            usuarioExiste.uniqueString = crypto.randomBytes(15).toString('hex')
            await usuarioExiste.save();
            await sendEmail(email, usuarioExiste.uniqueString);
            res.json({
              success: true,
              from: "form-Signup", //RESPONDE CON EL TOKEN Y EL NUEVO USUARIO
              message:
                " We sent you an email to validate it, please check your box ",
            });
          } else {
            usuarioExiste.save();

            res.json({
              success: true,
              from: "form-Signup",
              message:
                "we add " + from + " to make signIn",
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
            message: "Congratulations your user has been created with " + from,
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
              "We sent you an email to validate it, please check your box to complete the signUp",
          }); // AGREGAMOS MENSAJE DE VERIFICACION
        }
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Something went wrong try again in a few minutes",
      }); //CAPTURA EL ERROR
    }
  },
  signInUser: async (req, res) => {
    const { email, password, from } = req.body.logedUser

    try {
      const usuarioExiste = await User.findOne({ email });
     /*  console.log(usuarioExiste);
      const indexpass = usuarioExiste.from.indexOf(from)
      console.log(usuarioExiste.password[indexpass]) METODO PARA RECUPERAR CONTRASEÑA*/ 

      if (!usuarioExiste) {
        // PRIMERO VERIFICA QUE EL USUARIO EXISTA
        
        res.json({
          success: false,
          message:"Your user never does created. Maybe you look SingUp page",
        })
      } else {
        if (from !== "form-Signup") {
          let contraseñaCoincide = usuarioExiste.password.filter((pass) =>
            bcryptjs.compareSync(password, pass)
          )

          if (contraseñaCoincide.length > 0) {
            //TECERO VERIFICA CONTRASEÑA

            const userData = {
              id: usuarioExiste._id,
              firstName: usuarioExiste.firstName,
              lastName:usuarioExiste.lastName,
              email: usuarioExiste.email,
              profilePicture:usuarioExiste.profilePicture,
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
              message: "welcome again " + userData.firstName+" " + userData.lastName,
            });
          } else {
            res.json({
              success: false,
              from: from,
              message:
                "You have not registered with " +
                from +
                "If you want to enter with this method you must do the signUp with " +
                from,
            });
          }
        } else {
          if (usuarioExiste.emailVerificado) {
            let contraseñaCoincide = usuarioExiste.password.filter((pass) =>
              bcryptjs.compareSync(password, pass)
            );
           

            if (contraseñaCoincide.length > 0) {
              const userData = {
                id: usuarioExiste._id,
                firstName: usuarioExiste.firstName,
                lastName: usuarioExiste.lastName,
                email: usuarioExiste.email,
                profilePicture:usuarioExiste.profilePicture,
                from: usuarioExiste.from,
              };

              const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, {
                expiresIn: 60 * 60 * 24,
              });

              res.json({
                success: true,
                from: from,
                response: { token, userData },
                message: "Welcome again " + userData.firstName,
              });
            } else {
              res.json({
                success: false,
                from: from,
                message: "The username or password do not match",
              });
            }
          } else {
            res.json({
              success: false,
              from: from,
              message:
                "You have not verified your email, please check your email box to complete your signUp",
            });
          }
        } //SI NO ESTA VERIFICADO
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Something went wrong try again in a few minutes",
      });
    }
  },
  signOutUser: async (req, res) => {
    const email = req.body.closeuser;
    const user = await User.findOne({ email });
    await user.save();
    res.json(console.log("closed session " + email));
  },
  verificarToken:(req, res) => {
    //console.log(req.user)
    if(!req.err){
    res.json({success:true,
              response:{id:req.user.id, firstName:req.user.firstName,lastName:req.user.lastName, email:req.user.email,profilePicture:req.user.profilePicture, from:"token"},
              message:"Welcome again "+req.user.firstName}) 
    }else{
        res.json({success:false,
        message:"Please signIn again"}) 
    }
}
};

module.exports = usersControllers;
