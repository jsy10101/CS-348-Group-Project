import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function TotalAccount({type, balance}) {
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
      </CardContent>
    </Card>
  );
}