import React, { useState } from "react";
import { Box, Typography, Button, IconButton, Divider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const styles = {
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    borderBottom: "1px solid #ccc",
    paddingBottom: "8px",
  },
  itemDetails: {
    flex: 1,
    marginRight: "8px",
  },
  itemActions: {
    display: "flex",
    alignItems: "center",
  },
  quantityButton: {
    minWidth: "24px",
    minHeight: "24px",
  },
};

export default function Cart() {
  // Dummy data for cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 1 },
    { id: 2, name: "Product 2", price: 20, quantity: 2 },
    { id: 3, name: "Product 3", price: 15, quantity: 1 },
  ]);

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Function to handle quantity adjustment
  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to handle item removal
  const handleItemRemove = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <Box sx={{ p: 3, width: "100%" }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <Box key={item.id} sx={styles.cartItem}>
              <Box sx={styles.itemDetails}>
                <Typography variant="body1">{item.name}</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body2">Price: ${item.price}</Typography>
                  <Box sx={{ mx: 1 }}>|</Box>
                  <Typography variant="body2">Quantity:</Typography>
                  <IconButton
                    size="small"
                    sx={styles.quantityButton}
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    -
                  </IconButton>
                  <Typography variant="body2">{item.quantity}</Typography>
                  <IconButton
                    size="small"
                    sx={styles.quantityButton}
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </IconButton>
                </Box>
              </Box>
              <Box sx={styles.itemActions}>
                <Typography variant="body2">
                  Total: ${item.price * item.quantity}
                </Typography>
                <IconButton
                  size="small"
                  onClick={() => handleItemRemove(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
          <Divider sx={{ my: 2 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography variant="h6">Total:</Typography>
            <Typography variant="h6">${calculateTotal()}</Typography>
          </Box>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Checkout
          </Button>
        </>
      ) : (
        <Typography variant="body1">Your cart is empty.</Typography>
      )}
    </Box>
  );
}
