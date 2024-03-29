
import "./StylesForm.css";
import { Link as LinkRouter } from "react-router-dom";
import userActions from "../../redux/actions/userActions";
import { connect } from 'react-redux';  
import React, { useEffect, useState } from "react";
import axios from "axios";             
import FacebookSignUp from './facebookSignup'; 
import ImgLogin from "./login.jpg"

           
        

 function SignUp(props) {

  
  const handleSubmit = (event) => {
    console.log(event)
    event.preventDefault()
    const userData = {
      firstName: event.target[1].value,
      lastName: event.target[3].value,
      email: event.target[5].value,
      password: event.target[7].value,
      profilePicture: event.target[9].value,
      selectCountry: event.target[11].value,
      from: "form-Signup",
    };
    props.signUpUser(userData);
    
    console.log(userData)
  };
  const [countries, setCountries] = useState(["Choose your country"]);
   console.log(props.message)  
  
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name")
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <div className="contenedorForm">
      <img src={ImgLogin} alt="svg" className="svg"/>     
        <form  onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
          </fieldset>
          <fieldset>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </fieldset>
          <fieldset>
            <label htmlFor="profilePicture">Profile Picture</label>
            <input
              type="text"
              id="profilePicture"
              name="profilePicture"
              placeholder="URL"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="selectCountry"> Choose your Country</label>
            <select name="selectCountry" id="selectCountry">
              <option defaultValue="Choose your country"></option>
              {countries.map((country, index) => (
                          <option key={index} value={country.name}>
                            {country.name}
                          </option>
                        ))}              
            </select>
          </fieldset>
          <div className="botonSubmit">
            <button className="btn-continuar" type="submit">
              SingUp
            </button>
          </div>
          <div className="text-center">Do Have an account? <LinkRouter to="/signin" ><span className="txtLink">SignIn</span></LinkRouter> </div>
          
        </form>
       
      </div>
    
  );
}
const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,
  
}
const mapStateToProps = (state) => {
return {
  message: state.userReducer.message,
}
}



export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
