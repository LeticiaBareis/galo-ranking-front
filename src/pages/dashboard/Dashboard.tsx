import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {HumilhadoList} from '../../shares/components/humilhadoList';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ExaltadoList } from '../../shares/components/exaltadoList';
import {Placar} from '../../shares/components/placar';
import PartidaForm from '../../shares/components/partidaForm';


import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  

export const Dashboard = () => {
    const [value, setValue] = React.useState('1');

    function createData(
        id: number,
        nome: string,
        galo: number,
        partidas: number
    ) {
      return { nome, galo, partidas };
    }
      
      const listHumilhados = [
        createData(1,"Letícia", 7 , 10),
        createData(2, "Luiz", 2, 2),
        createData(3, "Renan", 15, 20),
        createData(4, "Letícia", 7 , 10),
        createData(5,"Luiz", 2, 2),
        createData(6,"Renan", 15, 20),
        createData(7,"Letícia", 7 , 10),
        createData(8,"Luiz", 2, 2),
        createData(9,"Renan", 15, 20)
      ];

      function createDataExaltados(
        nome: string,
        galo: number,
        partidas: number
      ) {
        return { nome, galo, partidas };
      }
      
      const listExaltados = [
        createDataExaltados("Letícia", 7 , 10),
        createDataExaltados("Luiz", 2, 2),
        createDataExaltados("Renan", 15, 20),
        createDataExaltados("Letícia", 7 , 10),
        createDataExaltados("Luiz", 2, 2),
        createDataExaltados("Renan", 15, 20),
        createDataExaltados("Letícia", 7 , 10),
        createDataExaltados("Luiz", 2, 2),
        createDataExaltados("Renan", 15, 20)
      ];

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    
    return(
    <Box
    > 
        <AppBar position="static" sx={{ mb: 2}}>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Galo Ranking
            </Typography>
            <PartidaForm></PartidaForm>
            </Toolbar>
        </AppBar>

        <Grid container spacing={1} sx={{paddingLeft: 1, paddingRight: 1}}>
            <Grid item wrap="nowrap" xs={12} md={7}>
                <Item sx={{ height: 250}} >
                    <TabContext value={value} >
                        <Box sx={{ borderColor: 'divider'}}>
                            <TabList onChange={handleChange} >
                                <Tab label="Ranking Humilhados" value="1" />
                                <Tab label="Ranking Exaltados" value="2" />
                            </TabList>                    
                            <TabPanel value="1" >
                                {HumilhadoList(listHumilhados)}
                            </TabPanel>
                            <TabPanel value="2">
                                { ExaltadoList(listExaltados)}
                            </TabPanel>
                        </Box>
                    </TabContext>                    
                </Item>
            </Grid>
            <Grid item wrap="nowrap" xs={12} md={5}>
                <Item sx={{ height:250}}>
                    { Placar() } 
                </Item>
            </Grid>
            <Grid item wrap="nowrap" xs={12} md={5}>
                <Item></Item>
            </Grid>
        </Grid>
    </Box>
    )
}