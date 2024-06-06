// Home.jsx
import React from 'react';
import { Box, CssBaseline, Typography, IconButton, Container, Grid, TextField, Button, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Carousel from './Carousel';
import ProductImg from './jogger.webp';

const StyledAppBar = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
}));

const products = [
  { id: 1, name: 'Product 1', price: '₹10.00', image: ProductImg },
  { id: 2, name: 'Product 2', price: '₹20.00', image: ProductImg },
  { id: 3, name: 'Product 3', price: '₹30.00', image: ProductImg },
];

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', pt: 0 }}>
      <CssBaseline />
     
      <Box sx={{ position: 'relative', width: '100%', mt: 0, mb: 8 }}>
        <Carousel />
        <Typography
          variant="h1"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '50%',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 20px',
            boxSizing: 'border-box',
            zIndex: 1
          }}
        >
          Zaid's Store
        </Typography>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4, width: '100%' }}>
        <Container>
          <Typography variant="h4" gutterBottom align="center">
            Welcome to Our E-Commerce Store!
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Discover our wide range of products and enjoy exclusive deals!
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom align="center">
              Featured Products
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="150"
                      image={product.image}
                      alt={product.name}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        <Box sx={{ mt: 'auto', textAlign: 'center', pb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Subscribe to our Newsletter
          </Typography>
          <TextField label="Email Address" variant="outlined" sx={{ mb: 2, width: '300px' }} />
          <Button variant="contained" color="primary" sx={{ ml: 2, px: 4, '&:hover': { backgroundColor: '#0069d9' }, '&:active': { backgroundColor: '#004286' } }}>Subscribe</Button>
        </Box>
      </Box>
    </Box>
  );
}
