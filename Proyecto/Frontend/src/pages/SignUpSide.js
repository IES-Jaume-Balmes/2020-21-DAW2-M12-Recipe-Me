import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const baseUrl = "https://localhost:8000/api/users";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/collection/1353633)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [errorPassRep, setErrorPassRep] = useState(false);
  const [errorNom, setErrorNom] = useState(false);

  function validateForm() {
    return (
      email.length > 0 && password.length > 0 && password === repeatPassword
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  async function peticionApi() {
    let jsonPeticion = {
      email: email,
      name: name,
      password: password,
    };
    console.log(jsonPeticion);

    await axios
      .post(baseUrl, jsonPeticion)
      .then((response) => {
        console.log(response.data);
        window.location.href = "./login";
      })
      .catch((error) => {
        console.log(error);
        alert("Ha ocurrido un error");
      });
  }

  const comprobarEmail = (email)=>{
    if(email === '' || email.indexOf('@') === -1 || email.indexOf('.') === -1) {

      return setErrorEmail(true)
      
   
    }
    return setErrorEmail(false)
  }

  const comprobarPass = (pass)=>{
    const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if(!regexPass.test(pass)) {

      return setErrorPass(true)
   
    }
    return setErrorPass(false)
  }

  const comprobarPassRep = (pass)=>{
    if(pass !== password) {

      return setErrorPassRep(true)
   
    }
    return setErrorPassRep(false)
  }

  const comprobarNom = (nom)=>{
    if(nom.trim() === ""){
      return setErrorNom(true)
    }
    return setErrorNom(false)
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Regístrate
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={(e)=>comprobarEmail(e.target.value)}
                  error={errorEmail}
                  helperText={errorEmail ? "Formato de Email incorrecto!" : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="uname"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Nombre completo"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                  onBlur={(e)=>comprobarNom(e.target.value)}
                  error={errorNom}
                  helperText={errorNom ? "Escribe un nombre!" : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={(e)=>comprobarPass(e.target.value)}
                  error={errorPass}
                  helperText={errorPass ? "Debe tener mas de 6 caracteres, mayusculas y números!" : ""}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="repeatPassword"
                  label="Repita el password"
                  type="password"
                  id="repeatPassword"
                  autoComplete="current-repeatPassword"
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  onBlur={(e)=>comprobarPassRep(e.target.value)}
                  error={errorPassRep}
                  helperText={errorPassRep ? "La contraseña no coincide!" : ""}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!validateForm()}
              onClick={peticionApi}
            >
              Registrar
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Ya tienes una cuenta? Logeate
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
