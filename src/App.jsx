import React, { useState } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Accounts from './Pages/Accounts';
import Navbar from './Components/Navbar';
import SideNav from './Components/SideNav';
import { Box, useMediaQuery, useTheme, IconButton } from '@mui/material';
import InventoryList from './Components/Inventory/InventoryList';
import CollectivesList from './Components/Collectives/CollectivesList';
import Cart from './Components/Cart/Cart';
import CustomerService from './Components/CustomerService/CustomerService';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';

const SecondaryNavbar = ({ show }) => (
  <Box
    sx={{
      position: 'fixed',
      top: show ? '50px' : '-50px', // Adjust according to your main navbar height
      left: 0,
      right: 0,
      transition: 'top 0.3s ease',
      zIndex: 999,
      backgroundColor: '#fff',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-around',
      boxShadow: '0px 4px 2px -2px gray'
    }}
  >
    <a href="/" style={{ textDecoration: 'none', color: 'black' }}>Home</a>
    <a href="/accounts" style={{ textDecoration: 'none', color: 'black' }}>Accounts</a>
    <a href="/about" style={{ textDecoration: 'none', color: 'black' }}>About</a>
    <a href="/inventory" style={{ textDecoration: 'none', color: 'black' }}>Inventory</a>
    <a href="/collectives" style={{ textDecoration: 'none', color: 'black' }}>Collectives</a>
    <a href="/cart" style={{ textDecoration: 'none', color: 'black' }}>Cart</a>
    <a href="/customerService" style={{ textDecoration: 'none', color: 'black' }}>Customer Service</a>
  </Box>
);

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [secondaryNavOpen, setSecondaryNavOpen] = useState(false);
  const openSideNav = useSelector((state) => state.counter.openSideNav);
  const dispatch = useDispatch();

  const toggleNav = () => {
    if (isMobile) {
      setSecondaryNavOpen(!secondaryNavOpen);
    } else {
      dispatch({ type: 'TOGGLE_SIDENAV' });
    }
  };

  return (
    <BrowserRouter>
      <div className='bgColor'>
        <Navbar />
        <Box height={70} />
        <IconButton
          onClick={toggleNav}
          sx={{
            position: 'fixed',
            top: 10,
            left: 10,
            zIndex: 1000,
            color: 'black'
          }}
        >
          <MenuIcon />
        </IconButton>
        {isMobile && <SecondaryNavbar show={secondaryNavOpen} />}
        <Box sx={{ display: 'flex' }}>
          {!isMobile && <SideNav />}
          <Box sx={{ flexGrow: 1, padding: 3 }}>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/about' exact element={<About />} />
              <Route path='/accounts' exact element={<Accounts />} />
              <Route path='/inventory' exact element={<InventoryList />} />
              <Route path='/collectives' exact element={<CollectivesList />} />
              <Route path='/cart' exact element={<Cart />} />
              <Route path='/customerService' exact element={<CustomerService />} />
            </Routes>
          </Box>
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
