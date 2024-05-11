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



export default function AccountsList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const empCollectionRef = collection(db, "accounts");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
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

  console.log("kkkkkk", rows)

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', padding: "12px" }}>
      <Typography gutterBottom variant='h5' component='div' sx={{ padding: "20px" }}>Accounts</Typography>
      <Divider />
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
                    <TableCell key={row.account_number} align='left'> {row.Product.map((prod) => { return(<Grid>{prod}</Grid> )})} </TableCell>
                    <TableCell key={row.account_number} align='left'> {row.contact.map((con) => { return(<Grid>{con}</Grid> )})} </TableCell>
                    <TableCell key={row.account_number} align='left'> {row.amount} </TableCell>
                    <TableCell key={row.account_number} align='left'> {row.advance} </TableCell>
                    <TableCell key={row.account_number} align='left'> {row.balance} </TableCell>
                    <TableCell key={row.account_number} align='left'> {moment.utc(row.created_at.seconds * 1000).format('DD/MM/YYYY')} </TableCell>
                    <TableCell key={row.account_number} align='left'> {moment.utc(row.updated_at.seconds * 1000).format('DD/MM/YYYY')} </TableCell>

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
  );
}
