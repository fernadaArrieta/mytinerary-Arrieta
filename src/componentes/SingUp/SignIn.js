import "./StylesForm.css"
import { Link as LinkRouter } from 'react-router-dom';
import React from 'react'
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';


 function SignIn(props) {

	const handleSubmit = (event) => {
		event.preventDefault()
		const logedUser = {
			email: event.target[0].value,
			password: event.target[1].value,
			from: "form-Signin"
		}
		props.signInUser(logedUser)
	}

    return(
        <div className="contenedorForm">
        <form onSubmit={handleSubmit}>  
    <fieldset>
      <label for="email">Email</label>
      <input type="email" id="email" name="mail" />
    </fieldset>
    <fieldset>
      <label for="contraseña">Password</label>
      <input type="text" id="contraseña" name="contraseña" />
    </fieldset>
    <div className="botonSubmit">
          <button class="btn-continuar" type="submit">Sing In</button>
        </div>
        <div className="text-center">Dont Have an account? <LinkRouter to="/signup"><span className="txtLink">SignUp</span></LinkRouter> </div>
    </form>
    </div>
    )
}
const mapDispatchToProps = {
	signInUser: userActions.signInUser,

}



export default connect(null, mapDispatchToProps)(SignIn);