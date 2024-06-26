import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Divider, Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from '../../firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import moment from 'moment';
import Modal from '@mui/material/Modal';
import AddAccount from './AddAccount';
import { useSelector } from 'react-redux';
import EditAccount from './EditAccount';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function AccountsList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const rowsFromStore = useSelector((state)=> state.counter.accountRows)
  const [rows, setRows] = useState([]);
  const empCollectionRef = collection(db, "accounts");
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleEditOpen = () => setEditOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditClose = () => setEditOpen(false);
  const [formId, setFormId] = useState("");

  console.log("accccccccccc",rowsFromStore)

  useEffect(() => {
    getAccounts();
  }, []);

  useEffect(()=>{
    setRows(rowsFromStore)
  },[rowsFromStore])

  const getAccounts = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "accounts", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getAccounts();
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      setRows([]);
      getAccounts();
    }
  };

  const editAccount = (a,b,c) =>{
    const data = {
      id:a,
      Product:["K1","K2","K3"],
      account_number:1221,
      advance:500,
      area:"parampurwa",
      area_code:"D2",
      balance:800,
      amount:1300,
      contact:[999,888,777],
      created_at:String(new Date()),
      name:"pradeep",
      updated_at:String(new Date())
    }

    setFormId(data)
    handleEditOpen()
  }

  return (
    <>
     <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddAccount CloseEvent={handleClose} />
        </Box>
      </Modal>
      <Modal
        open={editOpen}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditAccount data={formId} CloseEvent={handleEditClose} />
        </Box>
      </Modal>
    </div>
    <Paper sx={{ width: '100%', overflow: 'hidden', padding: "12px" }}>
      <Typography gutterBottom variant='h5' component='div' sx={{ padding: "20px" }}>Accounts</Typography>
      <Divider />
      <Box height={10} />
      <Stack direction="row" spacing={2} className="my-2 mb-2">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={rows}
          sx={{ width: 300 }}
          onChange={(e, v) => filterData(v)}
          getOptionLabel={(rows) =>  rows.name || ""}
          renderInput={(params) => (
            <TextField {...params} size="small" label="Search Accounts" />
          )}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Button onClick={handleOpen} variant="contained" endIcon={<AddCircleIcon />}>
          Add
        </Button>
      </Stack>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>

              <TableCell align="left" style={{ minWidth: '50px' }}>  Line </TableCell>
              <TableCell align="left" style={{ minWidth: '50px' }}>  Account Number </TableCell>
              <TableCell align="left" style={{ minWidth: '50px' }}>  Name </TableCell>
              <TableCell align="left" style={{ minWidth: '50px' }}>  Area </TableCell>
              <TableCell align="left" style={{ minWidth: '50px' }}>  Product </TableCell>
              <TableCell align="left" style={{ minWidth: '50px' }}>  Contact </TableCell>
              <TableCell align="left" style={{ minWidth: '50px' }}>  Amount </TableCell>
              <TableCell align="left" style={{ minWidth: '50px' }}>  Advance </TableCell>
              <TableCell align="left" style={{ minWidth: '50px' }}>  Balance </TableCell>
              <TableCell align="left" style={{ minWidth: '50px' }}>  Sales On </TableCell>
              <TableCell align="left" style={{ minWidth: '50px' }}>  Last Recieved </TableCell>
              <TableCell align="left" style={{ minWidth: '50px' }}>  Actions </TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.account_number} >

                    <TableCell key={row.account_number} align='left'> {row.area_code} </TableCell>
                    <TableCell key={row.account_number} align='left'> {row.account_number} </TableCell>
                    <TableCell key={row.account_number} align='left'> {row.name} </TableCell>
                    <TableCell key={row.account_number} align='left'> {row.area} </TableCell>
                    <TableCell key={row.account_number} align='left'> {row.Product && row.Product.length > 0 && row.Product.map((prod) => { return (<Grid>{prod}</Grid>) })} </TableCell>
                    <TableCell key={row.account_number} align='left'> {row.contact && row.contact.length > 0 && row.contact.map((con) => { return (<Grid>{con}</Grid>) })} </TableCell>
                    <TableCell key={row.account_number} align='left'> {row.amount} </TableCell>
                    <TableCell key={row.account_number} align='left'> {row.advance} </TableCell>
                    <TableCell key={row.account_number} align='left'> {row.balance} </TableCell>
                    <TableCell key={row.account_number} align='left'> {moment(row.created_at).format('DD/MM/YYYY')} </TableCell>
                    <TableCell key={row.account_number} align='left'> {moment(row.updated_at).format('DD/MM/YYYY')} </TableCell>
                    <TableCell align="left">
                      <Stack spacing={2} direction="row">
                        <EditIcon
                          style={{
                            fontSize: "20px",
                            color: "blue",
                            cursor: "pointer",
                          }}
                          className="cursor-pointer"
                        onClick={() => editAccount(row.id, row.name, row.price)}
                        />
                        <DeleteIcon
                          style={{
                            fontSize: "20px",
                            color: "darkred",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            deleteUser(row.id);
                          }}
                        />
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
