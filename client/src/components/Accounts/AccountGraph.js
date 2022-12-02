import React from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

export default function AccountGraph({accountID}) {
    const [expenditureMap, setExpenditureMap] = React.useState(null);
    const [duration, setDuration] = React.useState(0);
    React.useEffect(() =>
    { axios.post('http://localhost:3030/transactions/', {accountID:accountID ,duration:duration})
                              .then((response) => {
                                setExpenditureMap(response.data.map(e => {return {createdAt: e.createdAt, amount: e.amount}}).sort((a,b) => {
                                var date1 = new Date(a.createdAt);
                                var date2 = new Date(b.createdAt);
                                return date1 - date2}))})
                              .catch(err => {console.log(err)})}, [accountID, duration]
    )

    const changeDuration = (event) => {
      setDuration(event.target.value);
    };

    if (!expenditureMap) return null;
    var dates = [];
    var expenditure = [];
    var counter = -1;
    var currentExpenditure = 0;
    for (let i = 0; i < expenditureMap.length; i++) {
      var date = new Date(expenditureMap[i].createdAt);
      var mm = date.getUTCMonth() + 1;
      var dd = date.getUTCDate();
      var yyyy= date.getUTCFullYear();
      var formattedDate = dd + "/" + mm + "/" + yyyy;
      if(dates.length === 0 || dates[counter] !== formattedDate) {
        dates.push(formattedDate);
        expenditure.push(0);
        counter++;
        expenditure[counter] += expenditureMap[i].amount;
      } else {
        expenditure[counter] += expenditureMap[i].amount;
      }
    }
    expenditure[counter] += currentExpenditure;
    const data = {
      labels: dates,
      datasets: [
        {
          label: '',
          data: expenditure,
          backgroundColor: 'rgba(152, 255, 152, 0.5)',
        },
      ],
    };
        
    const options = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Expenditure over the past ' + ((duration == 0) ? '' : duration + ' days'),
        },
      },
    };
        
    return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Duration</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={duration}
            label="Duration"
            onChange={changeDuration}
          >
            <MenuItem value={30}>1 Month</MenuItem>
            <MenuItem value={120}>4 Months</MenuItem>
            <MenuItem value={180}>6 Months</MenuItem>
            <MenuItem value={0}>All time</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Bar options={options} data={data} />
    </div>
    );
}