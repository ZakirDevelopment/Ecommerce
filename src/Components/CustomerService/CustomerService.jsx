import React from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import CustomerSupportImage from './ttt.jpg'; // Assuming you have an image in your project
import LiveChatImage from './lll.png'; // Assuming you have an image in your project
import EmailSupportImage from './mmm.png'; // Assuming you have an image in your project

const CustomerCareService = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Customer Care Service
      </Typography>
      <Typography variant="body1" paragraph>
        Our customer care team is here to help you with any issues or questions you may have. We offer multiple ways for you to get in touch with us.
      </Typography>

      <Grid container spacing={12} >
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Customer Support"
              height="140"
              image={CustomerSupportImage}
              title="Customer Support"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Phone Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Call us at 1-800-123-4567. Our support team is available 24/7 to assist you with your queries.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Call Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Live Chat"
              height="140"
              image={LiveChatImage}
              title="Live Chat"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Live Chat
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chat with our support agents in real-time for quick assistance.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Email Support"
              height="140"
              image={EmailSupportImage}
              title="Email Support"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Email Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Send us an email at support@example.com. We aim to respond within 24 hours.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Email Us
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomerCareService;
