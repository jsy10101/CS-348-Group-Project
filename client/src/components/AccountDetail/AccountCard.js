import React from 'react'
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardActions } from '@mui/material';

export default function AccountCard({type, balance, accountId}) {
  var str = String(accountId).toUpperCase();
  var stars = "****";
  var str2 = str.substring(str.length - 4, str.length);

  return (
    <Card style={{backgroundColor: "teal"}} sx={{ minWidth: 260, p: 0.25}}>
      <CardContent sx={{m: 0.5, backgroundColor: "white", borderRadius: 1}}>
        <table width="100%">
          <tbody>
            <tr>
              <td>
                <Typography variant="h5" component="div" style={{color: "black", fontSize: '21px', textTransform: "uppercase", fontWeight:"bold" }}>
                  {type}
                </Typography>
              </td>
              <td>
                <Typography align="right" variant="h5" component="div" style={{color: "teal", fontSize: '25px', fontWeight: "bold"}}>
                  $ {balance}
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
        <Typography color="text.secondary" style={{color: "black", letterSpacing: 3, fontSize: '15px'}}>
          {stars} &nbsp;{stars} &nbsp;{stars} &nbsp;{str2}
        </Typography>
      </CardContent>
 
      <CardActions sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end"} } >
        <Button variant="contained" style={{backgroundColor: "rgba(0,0,0,0.8"}} size="small">Details</Button>

      </CardActions>
    </Card>
  );

}