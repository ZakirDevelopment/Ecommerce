import React from 'react';
import { Box, CssBaseline, Typography, Container, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Image from './zzx.jpg'


export default function About() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                        <img src={Image} alt="About Us" style={{ width: '100%', borderRadius: '8px' }} />
                        <img src={Image} alt="About Us" style={{ width: '100%', borderRadius: '8px' }} />
                        <img src={Image} alt="About Us" style={{ width: '100%', borderRadius: '8px' }} />
                            {/* <img src={Image} alt="About Us" style={{ width: '100%', borderRadius: '8px' }} /> */}
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h4" gutterBottom>
                                About Our E-Commerce Store
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Welcome to our e-commerce store! We are dedicated to providing the best quality products to our customers. Our mission is to bring you a wide range of products at competitive prices, backed by excellent customer service.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Our journey began in [Year], with the aim to revolutionize the online shopping experience. We started with a small but passionate team and have grown exponentially since then. Our commitment to quality and customer satisfaction has been the cornerstone of our success.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                At our store, you will find a variety of products across different categories. Whether you're looking for the latest electronics, fashionable clothing, or unique home decor items, we've got you covered. We work closely with trusted suppliers to ensure that you receive top-notch products.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Thank you for choosing our e-commerce store. We look forward to serving you and making your shopping experience enjoyable and memorable.
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                How to Log In and Set Up Your Account
                            </Typography>
                            <Typography variant="body1" paragraph>
                                To log in, simply click on the 'Login' button at the top right corner of the page and enter your credentials. If you are new, click on 'Sign Up' to create an account.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                After logging in, you can set up your account by navigating to the 'Account Settings' page. Here you can update your personal information, manage your orders, and set your preferences.
                            </Typography>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={() => navigate('/')}
                                sx={{ mt: 2 }}
                            >
                              <p>get started &#8721;</p> 
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
