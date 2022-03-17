import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import './StylesForm.css'

function FacebookSignUp(props) {

  const responseFacebook = async (res) => {
    console.log(res)
    console.log(res.name)
      const fullNameSeparado = res.name.split(" ")
      console.log(fullNameSeparado)

     //let firstName  = fullNameSeparado[0]
     // let lastName= fullNameSeparado[1]
      //console.log(nombre)
      //console.log(apellido)

    const userData = {
      firstName:fullNameSeparado[0],
      lastName:fullNameSeparado[1],     
      email: res.email,
      password: res.id,
      profilePicture:res.picture.data.url,
      from: "facebook",
      selectCountry:props.selectCountry
    }
    await props.signUpUser(userData)
  }

  return (
    <FacebookLogin
    cssClass="buttonsocial my-facebook-button-class"
    icon="fa-facebook"
    textButton=" SignUp with Facebook"
      appId="507577797404906"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}

    />
  );
}
const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(FacebookSignUp);