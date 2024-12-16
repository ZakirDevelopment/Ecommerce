import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HelpIcon from '@mui/icons-material/Help';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const drawerWidth = 240;

const routeTitleMap = {
  '/': 'Home',
  '/accounts': 'Accounts',
  '/about': 'About',
  '/inventory': 'Inventory',
  '/collectives': 'Collectives',
  '/cart': 'Cart',
  '/CustomerService': 'Customer Service',
};

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  borderRadius: '10px',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  borderRadius: '10px',
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    color: '#000',
    '& .MuiDrawer-paper': {
      backgroundColor: '#fff',
      color: '#000',
    },
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideNav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const open = useSelector((state) => state.counter.openSideNav);
  const navigate = useNavigate();

  const renderDrawerContent = () => (
    <List>
      {['/', '/accounts', '/about', '/inventory', '/collectives', '/cart', '/CustomerService'].map((path, index) => {
        const icons = [
          <HomeIcon />,
          <AccountCircleIcon />,
          <InfoIcon />,
          <InventoryIcon />,
          <AccountBalanceIcon />,
          <ShoppingCartIcon />,
          <HelpIcon />
        ];
        const labels = ['Home', 'Accounts', 'About', 'Inventory', 'Collectives', 'Cart', 'Customer Service'];

        return (
          <ListItem key={labels[index]} disablePadding sx={{ display: 'block' }} onClick={() => navigate(path)}>
            <ListItemButton
              sx={{
                background: location.pathname === path ? "#d1d3d5" : undefined,
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                borderRadius: '10px',
                margin: '5px 10px',
                '&:hover': {
                  background: '#e0e0e0',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: 'black',
                }}
              >
                {icons[index]}
              </ListItemIcon>
              <ListItemText primary={labels[index]} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <CssBaseline />
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? false : open}
      >
        <DrawerHeader>
          <Divider />
        </DrawerHeader>
        {renderDrawerContent()}
      </Drawer>
    </Box>
  );
}
