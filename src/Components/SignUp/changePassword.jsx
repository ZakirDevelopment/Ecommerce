import React from 'react';
import RecoverPassword from '../RecoverPassword';
import { Box } from '@mui/material';

export default function ResetPassword1() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px 10px',
        boxSizing: 'border-box',
        ' @media(max-width:991px)': { padding: '20px 10px' },
        ' @media(max-width:479px)': { padding: '0px' },
      }}>
      <RecoverPassword />
    </Box>
  );
}
