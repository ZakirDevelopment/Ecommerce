import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import CustomerSupportImage from "./ttt.jpg"; // Assuming you have an imaxge in your project
import LiveChatImage from "./lll.png"; // Assuming you have an image in your project
import EmailSupportImage from "./mmm.png"; // Assuming you have an image in your project
import "./CuomerService.css";

const CustomerCareService = () => {
  const [value, setValue] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [Contact, setContact] = useState("");
  const [Class, setClass] = useState("");
  const [Section, setSection] = useState("");
  const [gender, setGender] = useState("female");

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        style={{ marginBottom: "20px", textAlign: "center" }}
      >
        Customer Care Service
      </Typography>
      <Typography
        variant="body1"
        paragraph
        style={{ marginBottom: "40px", textAlign: "center" }}
      >
        Our customer care team is here to help you with any issues or questions
        you may have. We offer multiple ways for you to get in touch with us.
      </Typography>

      <Grid container spacing={4}>
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
                Call us at 1-800-123-4567. Our support team is available 24/7 to
                assist you with your queries.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "10px" }}
              >
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
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "10px" }}
              >
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
                Send us an email at support@example.com. We aim to respond
                within 24 hours.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "10px" }}
              >
                Email Us
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div className="heading">
        <div className="heading">
          <h1
            className="text"
            style={{ marginTop: "40px", textAlign: "center" }}
          >
            Students details here
          </h1>
        </div>
      </div>

      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="Firstname"
            label="First Name"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            style={{ marginBottom: "20px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="Lastname"
            label="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            style={{ marginBottom: "20px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="Address"
            label="Address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            style={{ marginBottom: "20px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="Contact"
            label="Contact"
            type="number"
            value={Contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
            style={{ marginBottom: "20px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="Class"
            label="Class"
            value={Class}
            onChange={(e) => {
              setClass(e.target.value);
            }}
            style={{ marginBottom: "20px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="Section"
            label="Section"
            value={Section}
            onChange={(e) => {
              setSection(e.target.value);
            }}
            style={{ marginBottom: "20px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            row
            style={{ justifyContent: "center", marginBottom: "20px" }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomerCareService;
