import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link }  from 'react-router-dom';
import { Divider, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';


const defaultTheme = createTheme();

function SelectPlayer() {
    const [player, setPlayer] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setPlayer(event.target.value);
      
    };

    return (
        <Grid item xs={6}>
            <FormControl fullWidth>
                <Select
                    value={player}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem value=""> 
                        <em>Jogador</em>
                    </MenuItem>
                    <MenuItem value={1}>Luis</MenuItem>
                    <MenuItem value={2}>Leticia</MenuItem>
                    <MenuItem value={3}>João</MenuItem>
                    <MenuItem value={4}>Ana</MenuItem>
                    <MenuItem value={5}>Karol</MenuItem>
                    <MenuItem value={6}>Jerry</MenuItem>
                    <MenuItem value={7}>Rennan</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    )
}


export default function Form() {
    const [nickname1, setNickname1] = React.useState('');
    const [nickname2, setNickname2] = React.useState('');

    const handleSubmit = () => {      
      console.log(nickname1, nickname2);
    };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ paddingBottom: 3}}>
            Nova Partida
          </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <Grid container spacing={1}>                            
                <SelectPlayer />
                <SelectPlayer />
                <Grid xs={12} sx={{paddingLeft: 1}}>
                    <TextField 
                        fullWidth 
                        onChange={e=> setNickname1(e.target.value)}
                        id="standard-basic"
                        label="Nickname Dupla 01"
                        variant="standard" 
                        sx={{paddingBottom: 3}}
                        />
                </Grid>
                <Grid xs={12}>
                    <Divider sx={{ paddingTop: 2, paddingBottom: 2}}>
                        <Typography variant="h6" >
                            VS
                        </Typography>
                    </Divider>
                </Grid>      
                <SelectPlayer />
                <SelectPlayer />
                <Grid xs={12} sx={{paddingLeft: 1}}>
                  <TextField 
                          fullWidth 
                          onChange={e=> setNickname2(e.target.value)}
                          id="standard-basic"
                          label="Nickname Dupla 02"
                          variant="standard" 
                          sx={{paddingBottom: 3}}
                          />
                </Grid>
              </Grid>
                <Link to={`/partida/${nickname1}/${nickname2}`} style={{ textDecoration: 'none' }}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit}
                    >
                       Iniciar Partida
                  </Button>
                </Link>
            </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}