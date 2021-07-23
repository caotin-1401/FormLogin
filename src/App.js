import './App.css'
import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import { Redirect } from 'react-router';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useSelector } from 'react-redux';

function App(){
	const SignedIn = useSelector(state =>state.authenticationReducer.isLoggedIn);
  	return (
		<div>
			<Router>
				<Switch>
					<Route exact path='/Sign-in' component={Login} />
					<Route exact path='/Dashboard'>
						{SignedIn ? (<Dashboard />) : (<Redirect from="*" to={"/Sign-in"} />)}
					</Route>
					<Redirect from="*" to={"/Sign-in"} />
				</Switch>
			</Router>
		</div>
	)

}
export default App;