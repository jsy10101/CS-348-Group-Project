import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function TotalAccount({type, balance}) {
  return (
    <Card style={{backgroundColor: "rgba(0,0,0,0.90)"}} sx={{}}>
      <CardContent>
        <table width="100%">
          <tbody>
            <tr>
              <td>
                <Typography variant="h5" component="div" style={{color: "white", fontSize: '21px', textTransform: "uppercase", fontWeight:"normal" }}>
                  {type}
                </Typography>
              </td>
              <td>
                <Typography align="right" variant="h5" component="div" style={{color: "white",  textTransform: "uppercase", fontWeight:"bold" }}>
                  $ {balance.toFixed(2)}
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}