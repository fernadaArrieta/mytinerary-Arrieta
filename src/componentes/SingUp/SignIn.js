import "./StylesForm.css"
import { Link as LinkRouter } from 'react-router-dom';
import React from 'react'
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import FacebookSignIn from './facebookSignin';



 function SignIn(props) {

	const handleSubmit = (event) => {
		event.preventDefault()
		const logedUser = {
			email: event.target[1].value,
			password: event.target[3].value,
			from: "form-Signup"
		}
		props.signInUser(logedUser)
  console.log(logedUser)
	}

    return(
        <div className="contenedorForm">
        <form onSubmit={handleSubmit}>  
    <fieldset>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="mail" />
    </fieldset>
    <fieldset>
      <label htmlFor="contraseña">Password</label>
      <input type="password" id="contraseña" name="contraseña" />
    </fieldset>
    <div className="botonSubmit">
          <button className="btn-continuar" type="submit">Sing In</button>
        </div>
        <div className="text-center">Dont Have an account? <LinkRouter to="/signup"><span className="txtLink">SignUp</span></LinkRouter> </div>
    <FacebookSignIn/>    
    </form>
   
    </div>
    )
}
const mapDispatchToProps = {
	signInUser: userActions.signInUser,

}



export default connect(null, mapDispatchToProps)(SignIn);