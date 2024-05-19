import { Grid, IconButton, Typography, TextField, Box, Autocomplete, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
import { useDispatch } from 'react-redux';
import { updateAccountsRows } from '../../redux/counter/counterSlice';

const Fields = [
  { label: 'C1', year: "C1" },
  { label: 'D1', year: "D1" },
  { label: 'D2', year: "D2" },
  { label: 'E1', year: "E1" },]

 

export default function EditAccount({ CloseEvent, data }) {
  const dispatch = useDispatch()
  const empCollectionRef = collection(db, "accounts");
  const [name, setName] = useState("")
  const [rows, setRows] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(()=>{
    setName(data?.name)
  },[data])

  const handleNameChange = (e) =>{
    setName(e.target.vale)
  }

  const createAccount = async() =>{
      const accountDoc = doc(db, "accounts", data.id)

      const newFields = {
        name: data.name,
        updated_at:String(new Date())
      }

      await updateDoc(accountDoc, newFields)

      getAccounts()
      CloseEvent()
      Swal.fire("Submitted", "Account has been updated", "success")
  }

  const getAccounts = async () => {
    const data = await getDocs(empCollectionRef);
    dispatch(updateAccountsRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
  };

  return (
    <>
      <Typography variant='h5' align='center'>
        Edit Account
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
          <TextField id="outlined-basic" label="Name"  value={name} onChange={handleNameChange} variant="outlined" size='small' sx={{ minWidth: "100%" }} />
        </Grid>

        <Grid item xs={6}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
        </Grid>

        <Grid item xs={6}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
        </Grid>

        <Grid item xs={6}>
          <Typography variant='h5' align='center'>
            <Button variant="contained" onClick={createAccount}>
              Submit
            </Button>
          </Typography>
        </Grid>

      </Grid>
    </>
  )
}
