import React,{Fragment, useState} from "react";
import { Link, useNavigate  } from "react-router-dom";
import clienteAxios from "./config/axios";
const NuevaCita = (props ) => {
    console.log(props);
    
    const [cita,guardarCita] =useState({
        nombre:'',
        propietario:'',
        telefono:'',
        fecha:'',
        hora:'',
        sintomas:''
    })
    const navigate = useNavigate();
    //leer los campos del formulario
    const actualizarState = e =>{
        // console.log(e.target.name);
        // console.log(e.target.value);
        guardarCita({
            //guardamos una copia de la cita osea en el state
            ...cita,
            // y luego le asignamos el valor que se está escribiendo
            // en el campo del formulario 
            // (nombre, propietario, telefono, fecha, hora, sintomas)
            // a la propiedad correspondiente de la cita
            // (nombre, propietario, telefono, fecha, hora, sintomas)
            // que se está guardando en el state
            [e.target.name]: e.target.value
        })
    }

    const agregarCita = e =>{
        e.preventDefault();

        //enviar la petición por axios
        clienteAxios.post('/pacientes',cita)
            .then(resultado => {
                console.log(resultado);
              // redireccionar
              props.guardarConsultar(true);
              navigate('/')
            }).catch(error => {
                console.log(error);
            })
            
            // redireccionar a la página principal 
            // después de agregar una nueva cita
            // (esto es un truco para redireccionar a la página principal)
            // (sin tener que usar el hook useHistory)
            // (que no se puede usar en un componente funcional)
            // (porque no es un componente hijo de un componente de ruta)
            // (y no se puede usar en un componente de clase)
            // (porque no se puede usar en un componente de clase)
            
    }
    return (
        <Fragment>
            <h1 className="my-5">Crear nueva cita</h1>

            <div className="container mt-5 py-5">                    
                    <div className="row">
                        <div className="col-12 mb-12 d-flex mb-5 justify-content-center ">
                            <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                        </div>
                    </div> 

                    <div className='col-md-8 mx-auto'>
                    <form
                        onSubmit={agregarCita} 
                        className='bg-white p-5 bordered'>
                        <div className='form-group'>
                            <label htmlFor='nombre'>Nombre Mascota</label>
                                <input
                                type='text'
                                className='form-control'
                                id='nombre'
                                name='nombre'
                                placeholder='Nombre Mascota'
                                onChange={actualizarState}
                                />
                        </div>

                    <div className='form-group'>
                        <label htmlFor='propietario'>Nombre Propietario</label>
                            <input
                            type='text'
                            className='form-control'
                            id='propietario'
                            name='propietario'
                            placeholder='Nombre Propietario'
                            onChange={actualizarState}
                            />
                        </div>

                    <div className='form-group'>
                        <label htmlFor='telefono'>Telefono</label>
                            <input
                            type='tel'
                            className='form-control'
                            id='telefono'
                            name='telefono'
                            placeholder='Telefono'
                            onChange={actualizarState}
                            />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='fecha'>Fecha Alta</label>
                            <input
                            type='date'
                            className='form-control'
                            id='fecha'
                            name='fecha'
                            onChange={actualizarState}
                            />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='hora'>Hora Alta</label>
                            <input
                            type='time'
                            className='form-control'
                            id='hora'
                            name='hora'
                            onChange={actualizarState}
                            />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='sintomas'>Sintomas</label>
                        <textarea
                            className='form-control'
                            name='sintomas'
                            rows='6'
                            onChange={actualizarState}
                        ></textarea>
                    </div>

                    <button type='submit' className='btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold'>
                    Agregar Cita
                    </button>
                    </form>
                    </div>
            </div>
        </Fragment>
    )

    ;
}
 
export default NuevaCita;

