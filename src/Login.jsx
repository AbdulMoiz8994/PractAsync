import React,{useState} from 'react'

//import Components
import Navbar from './Navbar.jsx'

import { makeStyles } from '@material-ui/core/styles';
import {Paper,TextField, Button} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
      flexWrap: 'wrap',
      '& > *': {

      },
    },
    Paper:{
        marginTop: 60,
        height: 350,
        width: 400,
        margin: '10px auto',
        padding: 30,
     textAlign: 'center',
      boxShadow: '0 0 25px  grey'
    },
    input:{
       width: '95%',
       marginBottom: '0%',
       marginTop: 20,
       fontSize: 30,
    },
    button:{
       width: '95%',
       padding: 17,
       marginTop: 20,
       background: 'dodgerblue'
    }
  }));
 
 export const Login = () => {
const[count,setCount]=useState()
function changes(){
  setCount(alert("you have login succesfully"))
   
}

    const classes = useStyles();
   

     return (
      
    <div className={classes.root}>
     <div>
         <Navbar/>
       </div>
         
      <Paper elevation={3} className={classes.Paper}>
     <h1>LOGIN</h1>
     <form className={classes.root} noValidate autoComplete="off">
      <TextField  placeholder="Please Enter Email" label="Email" variant="filled" className={classes.input}/>
      <TextField  type="password" placeholder="Please Enter Password" label="Password" variant="filled"  className={classes.input}/>
      <Button onClick={changes}   variant="contained" color="primary" className={classes.button} disableElevation>
      LOGIN
    </Button>
    </form>
      </Paper>

    </div>         
     )
 }



   
