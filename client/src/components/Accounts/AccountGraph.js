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
    const [duration, setDuration] = React.useState(7);
    React.useEffect(() =>
    {axios.post('http://localhost:3030/transactions/', {AccountID:accountID ,duration:duration})
                              .then((response) => {setExpenditureMap(response.data.map(e => {return {createdAt: e.createdAt, Amount: e.Amount}}).sort((a,b) => {
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
        expenditure[counter] += expenditureMap[i].Amount;
      } else {
        expenditure[counter] += expenditureMap[i].Amount;
      }
    }
    expenditure[counter] += currentExpenditure;
    console.log(dates, expenditure)
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
          text: 'Expenditure over the past ' + duration + ' days',
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
            <MenuItem value={7}>Week</MenuItem>
            <MenuItem value={14}>2 Weeks</MenuItem>
            <MenuItem value={28}>4 Weeks</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Bar options={options} data={data} />
    </div>
    );
}