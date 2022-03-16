import { propTypes } from "react-bootstrap/esm/Image";
import "./StylesForm.css";
import { Link as LinkRouter } from "react-router-dom";
import userActions from "../../redux/actions/userActions";
import { connect } from 'react-redux';                
                    
   
      
    

 function SignUp(props) {

  console.log(props)
  const handleSubmit = (event) => {
    event.preventDefault()
    const userData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      profilePicture: event.target[4].value,
      selectCountry: event.target[5].value,
      from: "form-Signup",
    };
    props.signUpUser(userData);
    
  };
  
  console.log(props.message) 
  
 

  return (
    <div className="contenedorForm">
     {/*  <div className="FormSignUp">
        <div className="imageForm">
          <img src="https://img2.freepng.es/20181202/wat/kisspng-clip-art-portable-network-graphics-image-airport-i-5c036a162cbff2.7437731915437276381833.jpg" width={350} height={400} />
          <h3 className="LinkSignin">
            Already have an account?<LinkRouter to="/signin">SigIn</LinkRouter>
          </h3>
        </div> */}
        <form onSubmit={handleSubmit}>
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
            <input type="text" id="password" name="password" />
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
              <option value="nada"></option>
              <option value="Afghanistan"> Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="otro">American Samoa</option>
              <option value="otro">Andorra</option>
              <option value="otro">Angola</option>
              <option value="otro">Anguilla</option>
              <option value="otro">Antartica</option>
              <option value="otro">Argentina</option>
              <option value="otro">Armenia </option>
              <option value="otro">Aruba</option>
              <option value="otro">Australia </option>
              <option value="otro">Austria</option>
              <option value="otro">Azerbaijan</option>
              <option value="otro">Bahamas, The </option>
              <option value="otro">Bahrain</option>
              <option value="otro">Bangladesh</option>
              <option value="otro">Bangladesh</option>
              <option value="otro">Barbados</option>
              <option value="otro">Bassas da India</option>
              <option value="otro">Belarus</option>
              <option value="otro">Belgium</option>
              <option value="otro">Belize</option>
              <option value="otro">Bermuda</option>
              <option value="otro">Bolivia</option>
              <option value="otro">Brazil</option>
              <option value="otro">Bulgaria</option>
              <option value="otro">Cambodia</option>
              <option value="otro">Cameroon</option>
              <option value="otro">Canada </option>
              <option value="otro">Cape Verde</option>
              <option value="otro">Central African Republic</option>
              <option value="otro">Chile</option>
              <option value="otro">China</option>
              <option value="otro">Colombia </option>
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
