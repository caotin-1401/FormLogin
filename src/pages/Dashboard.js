import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import store from './../store/createStore'
import './Dashboard.css';
const useStyles = makeStyles((theme) => ({
  	root: {
		background: "#b5e8f5",
		width:'100%',
		height:"100vh",
  	},
}));

export default function Dashboard() {
  	const classes = useStyles();
  	const data = store.getState().authenticationReducer;
  	return (
		<div className = "container">
			<div className ="App2">
				<div className={classes.root}>
					<h3> DATA SUBMIT</h3>
		 			<p> FirstName: {data.fname}</p>
    	    		<p> LastName: {data.lname}</p>
    	    		<p> PhoneNumber: {data.phone}</p>
    	    		<p> Hobby: {data.hobby}</p>
    	    		<p> Gender: {data.gender}</p>
    	    		<p> Email: {data.email}</p>
    	    		<p> Password: {data.password}</p>
   				</div>  
			</div>
		</div>
  	);
}
