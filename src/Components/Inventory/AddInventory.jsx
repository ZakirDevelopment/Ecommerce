import React, { useState } from 'react';
import {
  TextField, Grid, Button, Typography, IconButton, Snackbar
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

export default function AddInventory({ CloseEvent, onAdd }) {
  const [formValues, setFormValues] = useState({
    productID: '',
    productName: '',
    productCategory: '',
    purchasePrice: '',
    sellingPrice: '',
    quantity: '',
    purchasedOn: new Date().toISOString().split('T')[0], // Default to today's date
    supplier: '',
    batchNumber: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    if (value !== '') {
      setFormErrors({ ...formErrors, [name]: false });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const currentDate = new Date().toISOString().split('T')[0];

    // Validate form fields
    const errors = {};
    Object.keys(formValues).forEach(key => {
      if (formValues[key] === '') {
        errors[key] = true;
      }
    });
    if (formValues.purchasedOn > currentDate) {
      errors.purchasedOn = true;
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      await addDoc(collection(db, 'inventory'), formValues);
      onAdd();
      CloseEvent();
      // setSnackbarOpen(true); // Show success snackbar
      Swal.fire("Added!", "Your Product has been added to the inventory.", "success");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Item successfully added"
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Add Inventory Item</Typography>
            <IconButton onClick={CloseEvent}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="productID"
              label="Product ID"
              value={formValues.productID}
              onChange={handleInputChange}
              error={formErrors.productID}
              helperText={formErrors.productID ? "Product ID is required" : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="productName"
              label="Product Name"
              value={formValues.productName}
              onChange={handleInputChange}
              error={formErrors.productName}
              helperText={formErrors.productName ? "Product Name is required" : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="productCategory"
              label="Category"
              value={formValues.productCategory}
              onChange={handleInputChange}
              error={formErrors.productCategory}
              helperText={formErrors.productCategory ? "Category is required" : ""}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="purchasePrice"
              label="Purchase Price"
              type="number"
              value={formValues.purchasePrice}
              onChange={handleInputChange}
              error={formErrors.purchasePrice}
              helperText={formErrors.purchasePrice ? "Purchase Price is required" : ""}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="sellingPrice"
              label="Selling Price"
              type="number"
              value={formValues.sellingPrice}
              onChange={handleInputChange}
              error={formErrors.sellingPrice}
              helperText={formErrors.sellingPrice ? "Selling Price is required" : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="quantity"
              label="Quantity"
              type="number"
              value={formValues.quantity}
              onChange={handleInputChange}
              error={formErrors.quantity}
              helperText={formErrors.quantity ? "Quantity is required" : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="purchasedOn"
              label="Purchased On"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formValues.purchasedOn}
              onChange={handleInputChange}
              error={formErrors.purchasedOn}
              helperText={formErrors.purchasedOn ? "Purchased date cannot be in the future" : ""}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="supplier"
              label="Supplier"
              value={formValues.supplier}
              onChange={handleInputChange}
              error={formErrors.supplier}
              helperText={formErrors.supplier ? "Supplier is required" : ""}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="batchNumber"
              label="Batch Number"
              value={formValues.batchNumber}
              onChange={handleInputChange}
              error={formErrors.batchNumber}
              helperText={formErrors.batchNumber ? "Batch Number is required" : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
