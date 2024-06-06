import React from 'react';
import Account2 from '../Account2';
import { Typography, Stack, Box } from '@mui/material';

export default function ChangePassword() {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '15px',
        backgroundColor: '#ffffff',
        ' @media(max-width:479px)': { padding: '8px' },
      }}>
      <Box
        sx={{
          width: '100%',
          maxWidth: '1000px',
          display: 'flex',
          padding: '15px',
          gap: '10px',
          boxShadow: '0 4px 12px #0000001a',
          margin: 'auto',
          boxSizing: 'border-box',
          ' @media(max-width:991px)': { padding: '10px' },
          ' @media(max-width:479px)': {
            flexDirection: 'column',
            padding: '8px',
          },
        }}>
        <Stack
          sx={{
            alignItems: 'flex-start',
            width: '50%',
            ' @media(max-width:479px)': { width: '100%' },
          }}
          spacing="0px">
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'var(--theme-font-family)',
              color: 'var(--theme-color-base)',
              ' @media(max-width:991px)': { fontSize: '17px' },
              ' @media(max-width:479px)': { fontSize: '16px' },
            }}>
            Account
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: 'var(--theme-font-family)',
              color: 'var(--theme-color-base-dark)',
              fontSize: '16px',
              ' @media(max-width:991px)': { fontSize: '15px' },
              ' @media(max-width:479px)': { fontSize: '14px' },
            }}>
            Manage your account settings.
          </Typography>
        </Stack>
        <Account2 />
      </Box>
    </Box>
  );
}
