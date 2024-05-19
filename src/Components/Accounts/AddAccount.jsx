import { Grid, IconButton, Typography, TextField, Box, Autocomplete, Button } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from "@mui/icons-material/Close";
import { db } from '../../firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import moment from 'moment';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { updateAccountsRows } from '../../redux/counter/counterSlice';

const Fields = [
  { label: 'C1', year: "C1" },
  { label: 'D1', year: "D1" },
  { label: 'D2', year: "D2" },
  { label: 'E1', year: "E1" },
];

export default function AddAccount({ CloseEvent }) {
  const dispatch = useDispatch();
  const empCollectionRef = collection(db, "accounts");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [product, setProduct] = useState("");
  const [contact, setContact] = useState("");
  const [amount, setAmount] = useState("");
  const [advance, setAdvance] = useState("");
  const [balance, setBalance] = useState("");
  const [salesOn, setSalesOn] = useState("");
  const [lastReceived, setLastReceived] = useState("");
  const [rows, setRows] = useState([]);
  const [price, setPrice] = useState(0);

  const handleNameChange = (e) => setName(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleProductChange = (e) => setProduct(e.target.value);
  const handleContactChange = (e) => setContact(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleAdvanceChange = (e) => setAdvance(e.target.value);
  const handleBalanceChange = (e) => setBalance(e.target.value);
  const handleSalesOnChange = (e) => setSalesOn(e.target.value);
  const handleLastReceivedChange = (e) => setLastReceived(e.target.value);

  const createAccount = async () => {
    await addDoc(empCollectionRef, {
      Product: ["K1", "K2", "K3"],
      account_number: 1221,
      advance: 500,
      area: address,
      area_code: "D2",
      balance: balance,
      amount: amount,
      contact: [contact],
      created_at: String(new Date()),
      name: name,
      updated_at: String(new Date()),
      sales_on: salesOn,
      last_received: lastReceived,
    });

    getAccounts();
    CloseEvent();
    Swal.fire("Submitted", "Account has been created", "success");
  };

  const getAccounts = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    dispatch(updateAccountsRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
  };

  return (
    <>
      <Typography variant='h5' align='center'>
        Add Account
      </Typography>
      <IconButton style={{ position: "absolute", top: "0", right: "0" }} onClick={CloseEvent}>
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Fields}
            sx={{ minWidth: "100%" }}
            renderInput={(params) => <TextField {...params} label="Field" />}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField id="outlined-basic" label="A/C" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
        </Grid>

        <Grid item xs={12}>
          <TextField id="outlined-basic" label="Name" value={name} onChange={handleNameChange} variant="outlined" size='small' sx={{ minWidth: "100%" }} />
        </Grid>

        <Grid item xs={12}>
          <TextField id="outlined-basic" label="Area" value={address} onChange={handleAddressChange} variant="outlined" size='small' sx={{ minWidth: "100%" }} />
        </Grid>

        <Grid item xs={12}>
          <TextField id="outlined-basic" label="Product" value={product} onChange={handleProductChange} variant="outlined" size='small' sx={{ minWidth: "100%" }} />
        </Grid>

        <Grid item xs={12}>
          <TextField id="outlined-basic" label="Contact" value={contact} onChange={handleContactChange} variant="outlined" size='small' sx={{ minWidth: "100%" }} />
        </Grid>

        <Grid item xs={6}>
          <TextField id="outlined-basic" label="Amount" value={amount} onChange={handleAmountChange} variant="outlined" size='small' sx={{ minWidth: "100%" }} />
        </Grid>

        <Grid item xs={6}>
          <TextField id="outlined-basic" label="Advance" value={advance} onChange={handleAdvanceChange} variant="outlined" size='small' sx={{ minWidth: "100%" }} />
        </Grid>

        <Grid item xs={6}>
          <TextField id="outlined-basic" label="Balance" value={balance} onChange={handleBalanceChange} variant="outlined" size='small' sx={{ minWidth: "100%" }} />
        </Grid>

        <Grid item xs={6}>
          <TextField id="outlined-basic" label="Sales On" value={salesOn} onChange={handleSalesOnChange} variant="outlined" size='small' sx={{ minWidth: "100%" }} />
        </Grid>

        <Grid item xs={6}>
          <TextField id="outlined-basic" label="Last Received" value={lastReceived} onChange={handleLastReceivedChange} variant="outlined" size='small' sx={{ minWidth: "100%" }} />
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h5' align='center'>
            <Button variant="contained" onClick={createAccount}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
