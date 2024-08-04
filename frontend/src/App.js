import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//componentes
import Paciente from "./components/Paciente";
import NuevaCita from "./components/NuevaCita";
import Cita from "./components/Cita";
import clienteAxios from "./components/config/axios";

function App() {

  //State de la app

  const [citas,guardarCitas] = useState([]);
  const [consultar,guardarConsultar] = useState(true);
    // useEffect para cuando el componente está listo
    // y para cuando hay cambios en el state
    // (en este caso, para cuando se agrega una nueva cita)
    /*this code is designed to fetch data from an API when the component mounts 
    and update the state with the fetched data, while also ensuring that the API 
    call is not repeated unnecessarily.
    */
   useEffect( () =>{
    if (consultar) {
        const consultarAPI = ()=>{
          clienteAxios.get('/pacientes')
          .then((result) => {
            guardarCitas(result.data)
            console.log(result.data);
            
            //deshabilitar la consulta
            // para que no se consulte la API
            // cada vez que se agrega una nueva cita
            // (porque se está usando un efecto)
            // (que se ejecuta cuando el componente está listo)
           
            guardarConsultar(false);
          }).catch((err) => {
            console.log(err);  
          });
          }
          consultarAPI()
    }
   } , [consultar]  ) // se pasa el state consultar como dependencia
   // para que se ejecute el useEffect cuando cambie el state consultar
   // (para que se consulte la API cuando se agrega una nueva cita)
   // (y no se consulte la API cada vez que se renderiza el componente)
   // (porque se está usando un efecto)
   // (que se ejecuta cuando el componente está listo)
   
  return (
    <Router>
      <Routes>
        <Route
        // path exacto
        // para que solo muestre el componente
        // cuando se visite la ruta exacta
        // (para que no muestre el componente en otras rutas)
          exact path="/"
          // pasar las citas al componente de pacientes
          // para que las muestre en la lista de citas
          element={<Paciente citas={citas} />}
          
        />
      <Route
          exact path="/nueva"
          element={<NuevaCita guardarConsultar={guardarConsultar}/>}
        />
      <Route  
          exact path="/cita/:_id"
          // pasar las citas al componente de citas
          element={ <Cita citas={citas} guardarConsultar={guardarConsultar}

          />}
          // 
          
        />
      </Routes>
    </Router>
  );
}

export default App;
