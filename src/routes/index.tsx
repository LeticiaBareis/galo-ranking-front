import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import {Dashboard} from '../pages'
import Partida from "../shares/components/partida";
import PartidaForm from "../shares/components/partidaForm";

export const AppRoutes = () =>{
  return(
    <Routes>
      <Route path="/iniciar-partida" element={<PartidaForm></PartidaForm>}/>
      <Route path="*" element ={<Navigate to="/"/>}/>
      <Route path="/" element ={ <Dashboard/> }/>
      <Route path="/partida/:nickname1/:nickname2" element={<Partida/>}/>
    </Routes>
  );
};