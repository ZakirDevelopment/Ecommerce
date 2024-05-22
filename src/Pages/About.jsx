import React from 'react';
import { Box, CssBaseline, Typography, Container, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const StyledAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function About() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <StyledAppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        About Us
                    </Typography>
                </Toolbar>
            </StyledAppBar>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Container>
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
                </Container>
            </Box>
        </Box>
    );
}
