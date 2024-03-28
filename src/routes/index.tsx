import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () =>{
  return(
    <Routes>
      <Route path="/pg-inicial" element={<Button>Teste</Button>}/>
      <Route path="*" element ={<Navigate to="/pg-inicial"/>}/>

    </Routes>
  );
};