import './Login.css';
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useStyles} from  './styleLogin'
import {useHistory} from 'react-router-dom'
import { useDispatch ,connect} from 'react-redux'
import { LOGIN_REQUEST } from './../reducers/index'
const mapStatetoProps = (state) => {
	return {
		isLoggedIn: state.authenticationReducer.isLoggedIn
	}
}
function Login(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange1 = (event) => {
    setAge(event.target.valueselect);
  };
  const handleChange2 = (event) => {
    setValue(event.target.valueRadio);
  };
	const [values, setValues] = React.useState({
		amount: '',
		password: '',
		weight: '',
		weightRange: '',
		showPassword: false,
	});
	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};
	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};



  const validationnForm = Yup.object().shape({
		fname: Yup.string()
			.required("This field is required"),
		lname: Yup.string()
			.required("This field is required"),
		hobby: Yup.string()
			.required("This field is required"),
		gender: Yup.string()
			.required("This field is required"),
		email: Yup.string()
			.required('This field is required')
			.matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@vinova.com.vn$/, 'Invalid mail address'),
		phone: Yup.string()
			.required('This field is required')
			.matches(/^[0-9]+$/, 'Phone Number must be a number'),
		password: Yup.string()
			.required('This field is required'),
		repassword: Yup.string()
			.required('This field is required')
			.oneOf([Yup.ref('password'), null], 'Comfirm Passwords must be same as password'),
	});
  const formOptions = { resolver: yupResolver(validationnForm) }
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm(formOptions)

  const [value, setValue] = useState(false);
  const dispatch = useDispatch()
	const history = useHistory()
	const { isLoggedIn } = props
	useEffect(() => {
		if (isLoggedIn) {
			history.push('./Dashboard')
		}
	}, [isLoggedIn]);
  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
			dispatch({
				type: LOGIN_REQUEST,
				payload: data,
			})
		}
    console.log(data);
    setValue(true);
  };
  return (
    <div className="container">
      <div className="App">
        <h1>SIGN UP</h1>  
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField  className={classes.FormInput}
            id="fname" 
            label="First Name" 
            {...register("fname")}
          />
          <Typography color="error">{errors.fname?.message}</Typography>      

          <TextField  className={classes.FormInput}
            id="lname" 
            label="Last Name" 
            {...register("lname")}
            /> 
          <Typography color="error">{errors.lname?.message}</Typography>  

          <div className ="div_all">
            <div className = "div_left">
              <FormControl className={classes.formControl}>
                <InputLabel id="hobby">Hobby</InputLabel>
                <Select
                {...register('hobby')}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  valueselect={age}      
                >     
                  <MenuItem value="Listen to Music">Listen to Music</MenuItem>
                 <MenuItem value="Read book">Read book</MenuItem>
                 <MenuItem value="Watch TV">Watch TV</MenuItem>
                 <MenuItem value="Others">Others</MenuItem>
                </Select>  
                <Typography color="error">{errors.hobby?.message}</Typography>                
              </FormControl>                
            </div>

            <div className = "div_right">
              <div className = "div_r1">
                <label>Gender:</label>
              </div>
              <div className = "div_r2">
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  {...register('gender')}
                  valueRadio={value}
                  onChange={handleChange2}
                >
                  <FormGroup row>
                    <FormControlLabel value="female" control={<Radio/>} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </FormGroup>
                  <Typography color="error">{errors.gender?.message}</Typography>
                </RadioGroup>
              </div>
            </div>
          </div>

          <TextField className={classes.FormInput}
            id="email" 
            label="Email" 
            {...register("email")}
          />
        	<Typography color="error">{errors.email?.message}</Typography>

          <TextField className={classes.FormInput}
            id="phone" 
            label="Phone Number" 
            {...register("phone")}
          />
        	<Typography color="error">{errors.phone?.message}</Typography>
        
          <div className={classes.root}>
            <FormControl className={classes.textField}>
          		<InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          		<Input
          			id="standard-adornment-password"
          			type={values.showPassword ? 'text' : 'password'}
          			onChange={handleChange("repassword")}
                 {...register("password")}
          			endAdornment={
          				<InputAdornment position="end">
          					<IconButton
          						aria-label="toggle password visibility"
          						onClick={handleClickShowPassword}
          						onMouseDown={handleMouseDownPassword}
          					>
          						{values.showPassword ? <Visibility /> : <VisibilityOff />}
          					</IconButton>
          				</InputAdornment>
          			}
          		/>
          	</FormControl>
          	<Typography color="error">{errors.password?.message}</Typography>

            <FormControl className={classes.textField}>
          		<InputLabel htmlFor="standard-adornment-password">Comfirm Password</InputLabel>
          		<Input
          			id="standard-adornment-password"
          			type={values.showPassword ? 'text' : 'password'}
          			onChange={handleChange("repassword")}
                 {...register("repassword")}
          			endAdornment={
          				<InputAdornment position="end">
          					<IconButton
          						aria-label="toggle password visibility"
          						onClick={handleClickShowPassword}
          						onMouseDown={handleMouseDownPassword}
          					>
          						{values.showPassword ? <Visibility /> : <VisibilityOff />}
          					</IconButton>
          				</InputAdornment>
          			}
          		/>
          	</FormControl>
            <Typography color="error">{errors.repassword?.message}</Typography>
          </div>

          <div className="submit">
            <Button   variant="contained" color="#033E4B" type="submit"  disableElevation>
              SUBMIT
            </Button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default connect(mapStatetoProps)(Login);
