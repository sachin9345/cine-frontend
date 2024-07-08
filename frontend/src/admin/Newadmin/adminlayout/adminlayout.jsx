import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewCinemaForm from '../Newadmin';
import MovieList from '../MovieList';
import AdminContactView from '../../Contactusenquiry';

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 250,
    boxSizing: 'border-box',
  },
}));

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: 20,
}));

const Layout = ({ children }) => {
  const navigate = useNavigate(); 
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    if (menuItem === 'Home') {
      navigate('/');
    }
  };

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      try {
        document.cookie = "sessionCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        localStorage.removeItem('token');
        toast.success("Logged out successfully!");
        navigate('/');
      } catch (error) {
        console.error("Logout failed:", error);
      }
    }
  };
  
  let mainContent;
  switch (selectedMenuItem) {
    case 'Create New':
      mainContent = <NewCinemaForm/>;
      break;
    case 'Movies':
      mainContent = <MovieList />;
      break;
      case 'Enqueiries':
      mainContent = <AdminContactView/>;
      break;
    default:
      mainContent = children;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerStyled variant="permanent">
        <Toolbar />
        <List>
          <ListItem button onClick={() => handleMenuItemClick('Home')}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('Movies')}>
            <ListItemText primary="Movies" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('Create New')}>
            <ListItemText primary="Create New" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Private Screening" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('Enqueiries')}>
            <ListItemText primary="Enqueries" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </DrawerStyled>
      <Main>
        <Toolbar />
        {mainContent}
      </Main>
    </Box>
  );
};

export default Layout;
