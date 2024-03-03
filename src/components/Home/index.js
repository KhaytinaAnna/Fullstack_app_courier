import React,{ useState, useEffect, If } from "react";
import {login} from "../../services/firebase";
import { ref, onValue } from "firebase/database";
import { db } from "../../services/firebase";
import {Paper, Box, TextField, Button} from "@mui/material";

export const Home = () => {
  const [loginStr, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const onLogin = async (email, pass) => {
    console.log('email, pass00', email, pass);
    try {
     await login(email, pass);
    } catch (e) {
      alert("We haven't such login, please re-enter");
      console.log(e);
    }
  };

  useEffect(() => {
    const profileDbRef = ref(db, "profile/login");
    const unsubscribe = onValue(profileDbRef, (snapshot) => {
      const data = snapshot.val();
      setLogin(data?.login || "");
    });
    return unsubscribe;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin("");
    setPass("");
    onLogin(loginStr, pass);
  };

  return (
      <>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Paper elevation={3} sx={{width: 400, mt: '30vh', p:5}}>
            <form onSubmit={handleSubmit}>
              <Box sx={{px: '10%'}}>
                <img src='./images/cd.svg' alt="Connect Delivery" />
              </Box>
              <TextField
                  type="email"
                  placeholder="Email"
                  fullWidth
                  variant="outlined"
                  label="login"
                  id="login"
                  sx={{mt: 3}}
                  value={loginStr}
                  onChange={handleLoginChange}
                  required
                  autoFocus
              />
              <TextField
                  type="password"
                  placeholder="Password"
                  fullWidth
                  variant="outlined"
                  label="password"
                  id="password"
                  sx={{mt: 3}}
                  value={pass}
                  onChange={handlePassChange}
                  required
                  autoFocus
              />
              <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  size="large"
                  sx={{mt:4}}
              >Войти</Button>
            </form>
          </Paper>
        </Box>
      </>
  );
};
