import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export const HumilhadoList = (rows: any[]) => {
  return (
    <TableContainer sx={{ overflow:'auto', maxHeight: 180, }}>
      <Table size="small" aria-label="sticky table" >
        <TableHead>
          <TableRow>
            <TableCell align='center'>Nome</TableCell>
            <TableCell align='center'>Galo</TableCell>
            <TableCell align='center'>Nº de partidas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell align='center'>{row.nome} </TableCell>
              <TableCell align="center">{row.galo}</TableCell>
              <TableCell align="center">{row.partidas}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}