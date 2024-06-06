import * as React from 'react';
import { useEffect } from 'react';
import { styled  } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import the icon
import HelpIcon from '@mui/icons-material/Help';


import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const routeTitleMap = {
  '/': 'Home',
  '/accounts': 'Accounts',
  '/about': 'About',
  '/inventory': 'Inventory',
  '/collectives': 'Collectives',
  '/cart': 'Cart', // Add route title for Cart
};

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
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
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
  const location = useLocation();
  const open = useSelector((state) => state.counter.openSideNav);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    const title = routeTitleMap[path] || 'Default Title';
    document.title = title;
  }, [location]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => dispatch({ type: 'TOGGLE_SIDENAV' })} sx={{ color: 'black' }}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem key="Home" disablePadding sx={{ display: 'block' }} onClick={() => navigate("/")}>
            <ListItemButton
              sx={{
                background: location.pathname === "/" ? "#d1d3d5" : undefined,
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
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
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem key="Accounts" disablePadding sx={{ display: 'block' }} onClick={() => navigate("/accounts")}>
            <ListItemButton
              sx={{
                background: location.pathname === "/accounts" ? "#d1d3d5" : undefined,
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
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
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Accounts" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem key="About" disablePadding sx={{ display: 'block' }} onClick={() => navigate("/about")}>
            <ListItemButton
              sx={{
                background: location.pathname === "/about" ? "#d1d3d5" : undefined,
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
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
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem key="Inventory" disablePadding sx={{ display: 'block' }} onClick={() => navigate("/inventory")}>
            <ListItemButton
              sx={{
                background: location.pathname === "/inventory" ? "#d1d3d5" : undefined,
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
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
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary="Inventory" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem key="Collectives" disablePadding sx={{ display: 'block' }} onClick={() => navigate("/collectives")}>
            <ListItemButton
              sx={{
                background: location.pathname === "/collectives" ? "#d1d3d5" : undefined,
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
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
                <AccountBalanceIcon /> {/* Use the imported icon */}
              </ListItemIcon>
              <ListItemText primary="Collectives" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem key="Cart" disablePadding sx={{ display: 'block' }} onClick={() => navigate("/cart")}>
            <ListItemButton
              sx={{
                background: location.pathname === "/cart" ? "#d1d3d5" : undefined,
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
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
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Cart" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem key="CustomerService" disablePadding sx={{ display: 'block' }} onClick={() => navigate("/CustomerService")}>
            <ListItemButton
              sx={{
                background: location.pathname === "/Customer Service" ? "#d1d3d5" : undefined,
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
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
                <HelpIcon/>
              </ListItemIcon>
              <ListItemText primary="Customer Service" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

        </List>
      </Drawer>
    </Box>
  );
}
