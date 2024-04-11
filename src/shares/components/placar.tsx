import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export const Placar = () => {
  return (
    <Card variant="outlined" sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        borderColor: 'divider',
        borderRadius: 1, 
        }}>
        <Grid xs={6}>
            <Box>
                <Stack direction="column">
                    <Typography variant="h6" component="div">
                        Jogar 1
                    </Typography>
                    <Typography  variant="h6" component="div">
                        Jogar 2
                    </Typography>
                    <Typography variant="h5" component="div">
                        85
                    </Typography>
                    <Typography color="text.secondary" variant="overline">
                        pontos
                    </Typography>
                </Stack>
            </Box>
      </Grid>
      <Divider orientation="vertical" variant="middle" flexItem> X </Divider>
      <Grid xs={6}>
            <Box sx={{}} >
            <Stack direction="column">
            <Typography variant="h6" component="div">
                Jogar 3
            </Typography>
            <Typography variant="h6" component="div">
                Jogar 4 
            </Typography>
            <Typography variant="h5" component="div">
                45
            </Typography>
            <Typography color="text.secondary" variant="overline">
                pontos
            </Typography>
            </Stack>
        </Box>
      </Grid>      
    </Card>
  );
}