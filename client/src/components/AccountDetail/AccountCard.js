import classes from './AccountCard.module.css'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';


export default function AccountCard({accountID}) {
    const [account, setAccount] = React.useState(null);

    React.useEffect(() => {     var url = "http://localhost:3030/accounts/"+accountID
                                console.log(url)
                                axios.get(url)
                                .then(response => {setAccount(response.data)})
                                .catch(err => console.log(err))}, [accountID])
    
                                if (!account) return null;

  return (
    <Card style={{backgroundColor: 'rgba(152, 255, 152, 0.5)'}} sx={{ minWidth: 275 }}>
      <CardContent>
        <table width="100%">
          <tbody>
            <tr>
              <td>
                <Typography variant="h5" component="div">
                  {account.type}
                </Typography>
              </td>
              <td>
                <Typography align="right" variant="h5" component="div">
                  {account.balance}
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {account._id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" style={{backgroundColor: "teal"}} size="small">Next</Button>
      </CardActions>
    </Card>
  );
}