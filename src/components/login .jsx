import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "./registration";
const Login = (props) => {
  const { open, setopen } = props;
  const [openRegistration, setopenRegistration] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [disable, setdisable] = useState(true);
  const navigate = useNavigate();
  const handleClose = () => {
    setopen(false);
  };
  const handleRegistrationButtonClick = () => {
    handleClose();
    setopenRegistration(true);
  };
  const handleLoginFormChange = (e) => {
    const { name } = e.target;
    setLoginForm({ ...loginForm, [name]: e.target.value });
  };
  const handleLoginSubmit = (e) => {};
  useEffect(() => {
    if (loginForm?.password !== "" && loginForm?.username !== "")
      setdisable(false);
    else setdisable(true);
  }, [loginForm]);

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title" sx={{ justifyContent: "center" }}>
          <Stack direction={"row"}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Login
            </Typography>
            <CloseOutlined
              sx={{
                cursor: "pointer",

                ml: "auto",
              }}
              onClick={handleClose}
            />
          </Stack>
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ mb: 2 }}>
            <Typography>Please login to continue</Typography>
          </DialogContentText>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              placeholder="Enter username"
              name="username"
              type="text"
              onChange={handleLoginFormChange}
            ></TextField>
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              placeholder="Enter Password"
              name="password"
              type="password"
              onChange={handleLoginFormChange}
            ></TextField>
          </Box>
        </DialogContent>

        <Stack margin={"auto"} direction={"row"}>
          <Button
            fullWidth
            onClick={handleLoginSubmit}
            color="primary"
            variant="outlined"
            sx={{ mb: 2, mr: 50 }}
            disabled={disable}
          >
            Login
          </Button>
          <Button
            onClick={handleRegistrationButtonClick}
            color="primary"
            autoFocus
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          >
            Register
          </Button>
        </Stack>
      </Dialog>
      {openRegistration && (
        <RegistrationForm
          setopen={setopen}
          openRegistration={openRegistration}
          setopenRegistration={setopenRegistration}
        />
      )}
    </Box>
  );
};

export default Login;
