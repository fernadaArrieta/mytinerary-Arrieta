import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link as LinkRouter} from "react-router-dom"


/* const settings = ['Profile', 'Account', 'Dashboard', 'Logout']; */

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
/*   const [anchorElUser, setAnchorElUser] = React.useState(null);  */

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
/*    const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };  */

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

/*   const handleCloseUserMenu = () => {
    setAnchorElUser(null); */
  

  return (
    <AppBar position="static" className='navBar'  sx={{ width:"100%", backgroundColor:'#5D6D7E'}}>
      <Container maxWidth="xl" sx={{ width:"100%", backgroundColor:'#5D6D7E'}}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            MyTinerary
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              >
              <MenuItem>
               
               <LinkRouter to="home" className='linkresp'><Typography textAlign="center">Home</Typography></LinkRouter>
                </MenuItem>
                <MenuItem>
               <LinkRouter to="cities" className='linkresp'><Typography textAlign="center">Cities</Typography></LinkRouter> 
                  
                </MenuItem>
            
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            MyTinerary
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <LinkRouter to="home" className='link'>
              <Button             
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               Home
              </Button>
              </LinkRouter>
              <LinkRouter to="cities" className='link'>
              <Button             
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               Cities
              </Button>
              </LinkRouter>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton /* onClick={handleOpenUserMenu} */ sx={{ p: 0 }}>
              <Avatar src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>
           {/*  <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
              </Box> 
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

