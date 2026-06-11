/* import React from "react";
import SignUp from "./signup";
import SignIn from "./signin";
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userActions from '../../redux/actions/userActions';


function Container(props) {

	function SignOut() {
		props.SignOutUser(props.user.email)
	}

	return (
		<>
			{props.user ? <><h1>Usuario conectado {props.user.fullName} desde {props.user.from}</h1>
				<div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
					<button onClick={SignOut} className="btn btn-primary btn-block" style={{ maxWidth: 400 }}> SignOut  </button>
				</div>
			</>
				: <h1>No hay usuario conectado</h1>}
			<div className="card bg-light">
				
					

					<BrowserRouter>
						<Routes>
							{!props.user &&<Route path="/" element={<SignIn />} />}
							{!props.user &&<Route path="/signup" element={<SignUp />} />}
						</Routes>
					</BrowserRouter>


				
			</div>

		</>
	)

}
const mapStateToProps = (state) => {
	return {
		user: state.userReducer.user,
	}
}
const mapDispatchToProps = {
	SignOutUser: userActions.SignOutUser,

}



export default connect(mapStateToProps, mapDispatchToProps)(Container) */