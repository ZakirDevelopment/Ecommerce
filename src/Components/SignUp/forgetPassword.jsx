import React from 'react';
import {
  Typography,
  InputLabel,
  Input,
  Stack,
  Button,
  Box,
  TextField,
  Container,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';

export default function ForgetPassword() {
    const handleSubmit = () =>{}
  return (
    <Container maxWidth="sm">
    <Box
        sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}
    >
        <Card sx={{ boxShadow: "4" }}>
            <CardContent sx={{ m: 3 }}>
                <Avatar sx={{
                    m: "auto",
                    bgcolor: "primary.main"
                }}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1"
                    variant="h5" sx={{ mt: 1 }}>
                    Forgot Password
                </Typography>

                <Box component="form"
                    onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Reset Password
                    </Button>
                </Box>
            </CardContent>
        </Card>
    </Box>
</Container>
  );
}
