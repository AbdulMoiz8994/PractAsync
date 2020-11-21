import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Paper,TextField, Button} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '5%',
      display: 'flex',
      flexWrap: 'wrap',
      padding: 10,
      '& > *': {
        margin: theme.spacing(1),
        // width: theme.spacing(16),
        // height: theme.spacing(16),
      },
    },
    Paper:{
        // marginTop: 10,
        height: 350,
        width: 400,
        margin: '10px auto',
        padding: 30,
     textAlign: 'center',
    },
    input:{
       width: '95%',
       marginBottom: '0%',
       marginTop: 20,
    },
    button:{
       width: '95%',
       padding: 17,
       marginTop: 20,
    }
  }));
 
 export const Login = () => {

    const classes = useStyles();

     return (
    <div className={classes.root}>

      <Paper elevation={3} className={classes.Paper}>
     <h1>LOGIN</h1>
     <form className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" label="Email" variant="filled" className={classes.input}/>
      <TextField id="filled-basic" label="Password" variant="filled"  className={classes.input}/>
      <Button   variant="contained" color="primary" className={classes.button} disableElevation>
      LOGIN
    </Button>
    </form>
      </Paper>

    </div>         
     )
 }



   
