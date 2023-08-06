import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Login from "./login ";
import RegistrationForm from "./registration";
const Header = () => {
  const [open, setopen] = useState(false);
  const navigate = useNavigate();
  const handleHomeScreenClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleLoginButtonClick = (e) => {
    setopen(true);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => {}}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Shoping App
        </Typography>

        <Button color="inherit" onClick={handleLoginButtonClick}>
          Login
        </Button>
        <Login open={open} setopen={setopen} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
