import { Grid, IconButton, Typography, TextField, Box, Autocomplete } from '@mui/material'
import React from 'react'
import CloseIcon from "@mui/icons-material/Close";

const Fields = [
    { label: 'C1', year: "C1" },
    { label: 'D1', year: "D1" },
    { label: 'D2', year: "D2" },
    { label: 'E1', year: "E1" },]

export default function AddInventory({CloseEvent}) {
  return (
    <>
    <Typography variant='h5' align='center'>
        Add Inventory
    </Typography>
    <IconButton style={{position:"absolute",top:"0", right:"0"}} onClick={CloseEvent}>
<CloseIcon />
    </IconButton>
    <Box height={20} />
    <Grid container spacing={2}>
        <Grid item xs={6}>
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Fields}
      sx={{ minWidth:"100%" }}
      renderInput={(params) => <TextField {...params} label="Field" />}
    />
        </Grid>

        <Grid item xs={6}>
        <TextField id="outlined-basic" label="A/C" variant="outlined" size='small' sx={{minWidth:"100%"}}/>
        </Grid>

        <Grid item xs={12}>
        <TextField id="outlined-basic" label="Name" variant="outlined" size='small' sx={{minWidth:"100%"}}/>
        </Grid>

        <Grid item xs={6}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' sx={{minWidth:"100%"}}/>
        </Grid>

        <Grid item xs={6}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' sx={{minWidth:"100%"}}/>
        </Grid>
       
    </Grid>
    </>
  )
}
