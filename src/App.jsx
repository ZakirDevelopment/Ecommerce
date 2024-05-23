import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Accounts from './Pages/Accounts';
import Navbar from './Components/Navbar';
import SideNav from './Components/SideNav.jsx';
import { Box, Grid } from '@mui/material';
import InventoryList from './Components/Inventory/InventoryList';
import CollectivesList from './Components/Collectives/CollectivesList'
function App() {
  return (
    <>
      <BrowserRouter>

      <div className='bgColor'>
            <Navbar />
            <Box height={70} />
            <Box sx={{display:'flex'}}>
                <SideNav />
                <Routes>
                  <Route path='/' exact element={<Home />} />
                  <Route path='/about' exact element={<About />} />
                  <Route path='/accounts' exact element={<Accounts />} />
                  <Route path='/inventory' exact element={<InventoryList />} />
                  <Route path='/Collectives' exact element={<CollectivesList />} />

                </Routes> 
            </Box>
        </div>

       
      </BrowserRouter>
    </>
  );
}

export default App;
