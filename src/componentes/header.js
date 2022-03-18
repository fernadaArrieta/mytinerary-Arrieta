import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link as LinkRouter } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";
import userActions from "../redux/actions/userActions";
import { connect } from "react-redux";

const settings = ["Signin", "Signup"];

const ResponsiveAppBar = (props) => {
  function SignOut() {
    props.SignOutUser(props.user.email);
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    SignOut();
  };

  return (
    <AppBar
      position="fixed"
      className="navBar"
      sx={{ width: "100%", backgroundColor: "transparent" }}
    >
      <Container
        maxWidth="xl"
        sx={{ width: "100%", backgroundColor: "#e7958eb6" }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            MyTinerary
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <LinkRouter to="home" className="linkresp">
                  <Typography textAlign="center" color="black">
                    Home
                  </Typography>
                </LinkRouter>
              </MenuItem>
              <MenuItem>
                <LinkRouter to="cities" className="linkresp">
                  <Typography textAlign="center" color="black">
                    Cities
                  </Typography>
                </LinkRouter>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            MyTinerary
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <LinkRouter to="home" className="link">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
            </LinkRouter>
            <LinkRouter to="cities" className="link">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Cities
              </Button>
            </LinkRouter>
          </Box>

          <Box sx={{ flexGrow: 0, color:'aquamarine'}}>
            <Tooltip
              title="Open settings"
              sx={{ width: "10px", paddingRight: "20px" }}
            >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!props.user ? 
              <>
              <MenuItem>
              <LinkRouter to="/signin" className='link' color='black'>
                <Typography textAlign="center">SignIn</Typography>
                </LinkRouter>
            </MenuItem>
            <MenuItem>
              <LinkRouter to="/signup" className='link' color='black'><Typography textAlign="center">SignUp</Typography></LinkRouter>
            </MenuItem>
              </>:
              <>
               <MenuItem onClick={handleCloseUserMenu}>
                  <LinkRouter to={"/signOut"}>
                    {" "}
                    <Typography textAlign="center">SignOut</Typography>
                  </LinkRouter>
                </MenuItem>
              </>
               
               /* : (
                settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <LinkRouter to={"/" + setting}>
                      <Typography textAlign="center"   >{setting}</Typography>
                    </LinkRouter>
                  </MenuItem>
                ))
                )} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
//};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
const mapDispatchToProps = {
  SignOutUser: userActions.SignOutUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveAppBar);
