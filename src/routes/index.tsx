import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () =>{
  return(
    <Routes>
      <Route path="/pg-inicial" element={<p> Página Inicial</p>}/>
      <Route path="*" element ={<Navigate to="/pg-inicial"/>}/>

    </Routes>
  );
};