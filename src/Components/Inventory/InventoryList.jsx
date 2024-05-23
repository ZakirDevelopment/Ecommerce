
import React, { useState, useEffect } from 'react';
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow,
  Divider, Typography, Button, Box, Stack, TextField, Autocomplete, Modal
} from '@mui/material';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from '../../firebase-config';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";
import moment from 'moment';
import AddInventory from './AddInventory';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function InventoryList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const inventoryCollectionRef = collection(db, "inventory");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(inventoryCollectionRef);
    const sortedData = data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .sort((a, b) => {
        const aTime = a.purchasedOn?.seconds || 0;
        const bTime = b.purchasedOn?.seconds || 0;
        return bTime - aTime;
      });
    setRows(sortedData);
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
    const userDoc = doc(db, "inventory", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      getUsers();
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddInventory CloseEvent={handleClose} onAdd={getUsers} />
        </Box>
      </Modal>
      <Paper sx={{ width: '100%', overflow: 'hidden', padding: "12px" }}>
        <Typography gutterBottom variant='h5' component='div' sx={{ padding: "20px" }}>Inventory1</Typography>
        <Divider />
        <Box height={10} />
        <Stack direction="row" spacing={2} className="my-2 mb-2">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={rows}
            sx={{ width: 300 }}
            onChange={(e, v) => filterData(v)}
            getOptionLabel={(rows) => rows.productName || ""}
            renderInput={(params) => (
              <TextField {...params} size="small" label="Search Inventory" />
            )}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button onClick={handleOpen} variant="contained" endIcon={<AddCircleIcon />}>
            Add
          </Button>
        </Stack>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ minWidth: '50px' }}>Product ID</TableCell>
                <TableCell align="left" style={{ minWidth: '50px' }}>Product Name</TableCell>
                <TableCell align="left" style={{ minWidth: '50px' }}>Category</TableCell>
                <TableCell align="left" style={{ minWidth: '50px' }}>Purchase Price (₹)</TableCell>
                <TableCell align="left" style={{ minWidth: '50px' }}>Selling Price (₹)</TableCell>
                <TableCell align="left" style={{ minWidth: '50px' }}>Quantity</TableCell>
                <TableCell align="left" style={{ minWidth: '50px' }}>Purchased On</TableCell>
                <TableCell align="left" style={{ minWidth: '50px' }}>Supplier</TableCell>
                <TableCell align="left" style={{ minWidth: '50px' }}>Batch Number</TableCell>
                <TableCell align="left" style={{ minWidth: '50px' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell align='left'>{row.productID}</TableCell>
                    <TableCell align='left'>{row.productName}</TableCell>
                    <TableCell align='left'>{row.productCategory}</TableCell>
                    <TableCell align='left'>{row.purchasePrice}</TableCell>
                    <TableCell align='left'>{row.sellingPrice}</TableCell>
                    <TableCell align='left'>{row.quantity}</TableCell>
                    <TableCell align='left'>{moment.utc(row.purchasedOn?.seconds * 1000).format('DD/MM/YYYY')}</TableCell>
                    <TableCell align='left'>{row.supplier}</TableCell>
                    <TableCell align='left'>{row.batchNumber}</TableCell>
                    <TableCell align="left">
                      <Stack spacing={2} direction="row">
                        <EditIcon
                          style={{
                            fontSize: "20px",
                            color: "blue",
                            cursor: "pointer",
                          }}
                          className="cursor-pointer"
                          // onClick={() => editUser(row.id)}
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
                ))}
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


