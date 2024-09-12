import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import siteLogo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { NavLinkConfig } from '../../types/NavLinkConfig';


const pages: NavLinkConfig[] = [
  { name: 'About', path: '/' },
  { name: 'Projects', path: "projects" },
  { name: 'Contact', path: "/" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{ backgroundColor: '#062c58' }}
      position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar src={siteLogo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              color: 'white',
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
            }}
          >
            Brian J. Buccellato
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                display: { xs: 'flex', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link style={{color: 'black'}} to={page.path}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar src={siteLogo} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            component="a"
            sx={{
              color: 'antiquewhite',
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              textDecoration: 'none',
            }}
          >
            Brian J. Buccellato
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (

              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex' }}
              >
                <Link to={page.path}>
                  {page.name}
                </Link>
              </Button>

            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
