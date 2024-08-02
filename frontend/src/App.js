import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//componentes
import Paciente from "./components/Paciente";
import NuevaCita from "./components/NuevaCita";
import Cita from "./components/Cita";
import clienteAxios from "./components/config/axios";

function App() {
  
  const [citas,guardarCitas] = useState([]);

   useEffect( () =>{
      
    const consultarAPI = ()=>{

            clienteAxios.get('/pacientes')
            .then((result) => {
              guardarCitas(result.data)
            }).catch((err) => {
              console.log(err);  
            });
            }
            consultarAPI()
   } , []  ) // no se están usando dependencias en este momento

  return (
    <Router>
      <Routes>
        <Route
          exact path="/"
          element={<Paciente />}
        />
      <Route
          exact path="/nueva"
          element={<NuevaCita />}
        />
      <Route  
          exact path="/cita/:id"
          element={<Cita />}
        />
      </Routes>
    </Router>
  );
}

export default App;
