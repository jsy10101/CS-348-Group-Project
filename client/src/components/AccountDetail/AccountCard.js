import React from 'react'
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from "../../assets/BANKLOGO.png"
import { Card, CardActions } from '@mui/material';

export default function AccountCard({type, balance, accountId}) {
  const upperacc = String(accountId).toUpperCase();
  return (
    <Card style={{backgroundColor: 'rgba(152, 255, 152, 0.5)'}} sx={{ minWidth: 275 }}>
      <CardContent>
        <table width="100%">
          <tbody>
            <tr>
              <td>
                <Typography variant="h5" component="div">
                  {type}
                </Typography>
              </td>
              <td>
                <Typography align="right" variant="h5" component="div">
                  $ {balance}
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {accountId}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" style={{backgroundColor: "teal"}} size="small">Next</Button>
      </CardActions>
    </Card>
  );
}