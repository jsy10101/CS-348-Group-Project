import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'

const columns = [
  {
    field: 'receiverID',
    headerName: 'Recipient',
    width: 150,
    editable: false,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 150,
    editable: false,
  },
  {
    field: 'createdAt',
    headerName: 'Date',
    type: 'date',
    width: 110,
    editable: false,
  },
];

export default function TransactionGrid({accountID}) {
  const [duration, setDuration] = React.useState(0);
  const [transactionData, setTransactionData] = React.useState([]);
  React.useEffect(() =>
    { 
      axios.post('http://localhost:3030/transactions', {accountID:accountID , duration:duration})
                              .then((response) => {setTransactionData(response.data.map(elem => {return {id: elem._id, receiverID: elem.receiverID, amount: elem.amount, createdAt: elem.createdAt}}))})
                              .catch(err => {console.log(err)});
      console.log(transactionData);
    }, [duration, accountID, transactionData]
  )
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={transactionData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}