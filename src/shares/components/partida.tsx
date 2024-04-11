import React, { useCallback } from "react";
import * as math from "mathjs";
import { Box, Button, Grid, Paper, Typography, styled } from "@mui/material";
import { useParams } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  function createData(
    pontos: number,
    color:string
  ) {
    return { pontos, color };
  }

  function createPlacar(
    nomeDupla: string,
    idDupla: string,
    
  ){ 
    return{nomeDupla, idDupla, pontuacao:0}
  }
  
  const rows = [
    createData( 5 , ''),
    createData( 10 , ''),
    createData( 20 , ''),
    createData( -5 , 'red'),
    createData( -10 , 'red'),
    createData( -20 , 'red'),
  ];

  const duplas = [
    createPlacar('Dupla 01', '1'),
    createPlacar('Dupla 02', '2')
  ]

 
export default function Partida() {
  const [inputDp1, setInputDp1] = React.useState(0);
  const [inputDp2, setInputDp2] = React.useState(0);
  const { nickname1, nickname2 } = useParams();


  const buttonAddClick = useCallback((value: number, idDupla:string) => {
    if(idDupla === '1'){
        const newValue = math.add(inputDp1, value);
        setInputDp1(ValidateInput(newValue));
    }else { 
        const newValue = math.add(inputDp2, value);
        setInputDp2(ValidateInput(newValue));
    }
  }, [inputDp1, inputDp2]);

  const handleClear = () => {
    setInputDp2(0);
    setInputDp1(0);
  };

  function ValidateInput(value:number){
    if(value < 0){
        value = 0
    }
    return value
  }

  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>
          {duplas.map((dupla)=>(
            <Grid item xs={12} sx={{ marginTop:5}}>
              <Item>
              {dupla.idDupla === '1' &&
                  <Typography>
                    Placar 
                    <Typography variant="h6">
                      {nickname1}
                    </Typography>
                  </Typography> ||
                  <Typography>
                    Placar
                    <Typography variant="h6">
                      {nickname2}
                    </Typography>
                  </Typography>
                }                
                {dupla.idDupla === '1' &&
                  <Typography variant="h2">
                    {inputDp1}
                  </Typography> ||
                  <Typography variant="h2">
                    {inputDp2}
                  </Typography>
                  }                          
                  <Grid xs={12} sx={{ flexDirection:'row'}}>
                    <div style={{display: 'flex', width: '100%'}}>
                      <div style={{width: '80%'}}>
                        {
                          rows.map((row) => (
                            <Button 
                              sx={{color:row.color, width:80, height:50}} 
                              onClick={()=>buttonAddClick(row.pontos, dupla.idDupla)}>
                              {row.pontos}pts
                            </Button>
                            ))
                        }
                      </div>
                      <div style={{display: 'flex', width: '20%', alignItems: 'center'}}>
                        <Button onClick={()=>buttonAddClick(50, dupla.idDupla)}>
                          Galo
                        </Button>
                      </div>
                    </div>
                  </Grid>
              </Item>
            </Grid>
            ))}
            <Grid xs={12} sx={{ display:'flex', justifyContent:'center', paddingTop: 6}}>
              <Button sx={{width: 180, height: 50}} onClick={()=>handleClear()} variant="contained">
                Finalizar
              </Button>
            </Grid>
        </Grid>
    </Box>
  );
};
