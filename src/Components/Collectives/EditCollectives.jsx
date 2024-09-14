import React, { useState } from "react";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { db } from "../../firebase-config";
import { collection, updateDoc, doc } from "firebase/firestore";

export default function EditCollectives({ data, CloseEvent, onUpdate }) {
  const [field, setField] = useState(data.field);
  const [amount, setAmount] = useState(data.amount);
  const [valid, setValid] = useState(data.valid);
  const [date, setDate] = useState(
    data.date.toDate().toISOString().split("T")[0]
  );

  const handleSubmit = async () => {
    await updateDoc(doc(db, "collectives", data.id), {
      field,
      amount,
      valid,
      date: new Date(date),
    });
    onUpdate();
    CloseEvent();
  };

  return (
    <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Edit Collective
      </Typography>
      <Stack spacing={2}>
        <TextField
          required
          label="Field"
          value={field}
          onChange={(e) => setField(e.target.value)}
        />
        <TextField
          required
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <TextField
          required
          label="Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          required
          label="Valid"
          select
          SelectProps={{
            native: true,
          }}
          value={valid ? "true" : "false"}
          onChange={(e) => setValid(e.target.value === "true")}
        >
          <option value={"true"}>Yes</option>
          <option value={"false"}>No</option>
        </TextField>
        <Button variant="contained" onClick={handleSubmit}>
          Update
        </Button>
      </Stack>
    </Box>
  );
}
