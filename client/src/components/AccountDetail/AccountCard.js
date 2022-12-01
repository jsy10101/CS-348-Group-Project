import React from 'react'
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from "../../assets/BANKLOGO.png"
import { Card, CardActions } from '@mui/material';

export default function AccountCard({type, balance, accountId}) {
  const upperacc = String(accountId).toUpperCase();
  return (
    <Card style={{backgroundColor: "teal"}} sx={{ minWidth: 260, minHeight: 225 }}>
      <CardContent>
        <table width="100%">
          <tbody>
            <tr>
              <td>
                <Typography variant="h5" component="div" style={{color: "white", fontSize: '21px'}}>
                  {type}
                </Typography>
              </td>
              <td>
                <Typography align="right" variant="h5" component="div" style={{color: "white", fontSize: '25px'}}>
                  $ {balance}
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{color: "white", fontSize: '15px'}}>
          {upperacc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" style={{backgroundColor: "teal", top: 78, left: 10}} size="small">Details</Button>
      </CardActions>
      <img src={logo} alt="Bank Logo" width={275} height={100} align="right" />
    </Card>
  );
}