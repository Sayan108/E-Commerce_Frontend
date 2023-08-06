import { useState, useEffect } from "react";
import React from "react";
import {
  Box,
  TextField,
  Menu,
  MenuItem,
  Typography,
  Stack,
  Button,
  Dialog,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CloseOutlined } from "@mui/icons-material";

const RegistrationForm = (props) => {
  const { setopen, openRegistration, setopenRegistration } = props;
  const navigate = useNavigate();
  const handleLoginButtonClick = () => {
    setopen(true);
    setopenRegistration(false);
  };
  const handleClose = () => {
    setopenRegistration(false);
  };
  const [signupform, setsignupform] = React.useState({
    fullname: "",
    email: "",
    password: "",
    address: "",
    repassword: "",
    phonenumber: "",
  });
  const [disable, setdisable] = useState(true);
  const handleLoginFormChange = (e) => {
    const { name } = e.target;
    setsignupform({ ...signupform, [name]: e.target.value });
  };
  const handleRegistrationFormSubmit = () => {
    console.log(signupform);
    handleClose();
  };

  useEffect(() => {
    if (
      signupform.fullname !== "" &&
      signupform.email !== "" &&
      signupform.password !== "" &&
      signupform.repassword !== "" &&
      signupform.repassword === signupform.password &&
      signupform.address !== "" &&
      signupform.phonenumber !== ""
    )
      setdisable(false);
    else setdisable(true);
  }, [signupform]);
  return (
    <Dialog
      sx={{
        height: "auto",
        width: "auto",
        marginLeft: "auto",
        merginRight: "auto",
      }}
      open={openRegistration}
    >
      <Stack direction={"row"}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", display: "flex", mb: 2 }}
        >
          Registration
        </Typography>
        <CloseOutlined
          sx={{
            cursor: "pointer",

            ml: "auto",
          }}
          onClick={handleClose}
        />
      </Stack>
      <Typography sx={{ fontWeight: "bold", display: "flex", mb: 2, ml: 2 }}>
        You Should Register Before you Log in
      </Typography>
      <Box sx={{ mb: 2, ml: 2, mr: 2 }}>
        {" "}
        <Box sx={{ mb: 2 }}>
          <TextField
            value={signupform.fullname}
            fullWidth
            placeholder="Enter fulname"
            name="fullname"
            type="text"
            onChange={handleLoginFormChange}
          ></TextField>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            value={signupform.email}
            fullWidth
            placeholder="Enter email  address"
            name="email"
            type="email"
            onChange={handleLoginFormChange}
          ></TextField>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            value={signupform.phonenumber}
            fullWidth
            placeholder="Enter phone number"
            name="phonenumber"
            type="phone"
            onChange={handleLoginFormChange}
          ></TextField>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            value={signupform.address}
            fullWidth
            placeholder="Enter address"
            name="address"
            type="text"
            onChange={handleLoginFormChange}
          ></TextField>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            value={signupform.password}
            fullWidth
            placeholder="Choose Password"
            name="password"
            type="password"
            onChange={handleLoginFormChange}
          ></TextField>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            value={signupform.repassword}
            fullWidth
            placeholder="Re-enter Password"
            name="repassword"
            type="password"
            onChange={handleLoginFormChange}
          ></TextField>
        </Box>
      </Box>

      <Stack margin={"auto"} direction={"row"}>
        <Button
          fullWidth
          onClick={handleRegistrationFormSubmit}
          color="primary"
          variant="outlined"
          sx={{ mb: 2, mr: 50 }}
          disabled={disable}
        >
          Sign up
        </Button>
        <Typography>Already signed up?</Typography>
        <Button
          onClick={handleLoginButtonClick}
          color="primary"
          autoFocus
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        >
          Login
        </Button>
      </Stack>
    </Dialog>
  );
};

export default RegistrationForm;
