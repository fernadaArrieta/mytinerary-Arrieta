import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import './StylesForm.css'

function FacebookSignUp(props) {

  const responseFacebook = async (res) => {
    console.log(res)
    
      const fullName = res.name.split(" ")
      console.log(fullName)

     let firstN  = fullName[0]
     let lastN= fullName[1]
     

    const userData = {
      firstName:firstN,
      lastName:lastN,     
      email: res.email,
      password: res.id,
      profilePicture:res.picture.data.url,
      from: "facebook",
      selectCountry:"none",
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