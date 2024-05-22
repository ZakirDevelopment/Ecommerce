import { Grid, IconButton, Typography, TextField, Box, Autocomplete, Button } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from "@mui/icons-material/Close";
import { db } from '../../firebase-config';
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";
import moment from 'moment';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { updateAccountsRows } from '../../redux/counter/counterSlice';

const Fields = [
  { label: 'C1', year: "C1" },
  { label: 'D1', year: "D1" },
  { label: 'D2', year: "D2" },
  { label: 'E1', year: "E1" },
];

const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  closeButton: {
    position: "absolute",
    top: "5px",
    right: "5px",
  },
  submitButton: {
    marginTop: '20px',
  }
};

export default function AddCollectives({ CloseEvent }) {
  const dispatch = useDispatch();
  const empCollectionRef = collection(db, "accounts");
  const [date, setDate] = useState("");
  const [field, setField] = useState("");
  const [amount, setAmount] = useState("");
  const [valid, setValid] = useState(false);

  const handleDateChange = (e) => setDate(e.target.value);
  const handleFieldChange = (e) => setField(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleValidChange = (e) => setValid(e.target.checked);

  const createAccount = async () => {
    await addDoc(empCollectionRef, {
      date: moment(date).toISOString(), // Convert date to ISO string
      field: field,
      amount: amount,
      valid: valid,
    });

    getAccounts();
    CloseEvent();
    Swal.fire("Submitted", "Account has been created", "success");
  };

  const getAccounts = async () => {
    const data = await getDocs(empCollectionRef);
    dispatch(updateAccountsRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
  };

  return (
    <div style={styles.container}>
      <Typography variant='h5' align='center' gutterBottom>
        Add Account
      </Typography>
      <IconButton style={styles.closeButton} onClick={CloseEvent}>
        <CloseIcon />
      </IconButton>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="date"
            label="Date"
            type="date"
            value={date}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Fields}
            fullWidth
            onChange={(e, v) => setField(v?.label || "")}
            renderInput={(params) => <TextField {...params} label="Field" />}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField id="amount" label="Amount" value={amount} onChange={handleAmountChange} variant="outlined" size='small' fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField id="valid" label="Valid" type="checkbox" checked={valid} onChange={handleValidChange} size="small" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={createAccount} fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
