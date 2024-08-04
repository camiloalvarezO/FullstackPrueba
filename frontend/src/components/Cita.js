import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

const Cita = ({ citas, guardarConsultar }) => {
    console.log(citas);
    console.log(guardarConsultar);
    console.log(useParams());
    
    
    // mostrar los parametros de la url para compararlos con el id de la cita
    const { _id } = useParams();
    console.log(_id);
    // buscar la cita por el id
    
    
    const cita = citas.find(cita => cita._id === _id);
    
    
    if (!cita) return <div className="container mt-1 py-5">                    
                        <div className="row">
                            <h1 className="col-12 mb-12 d-flex mb-5 justify-content-center">Cita No encontrada</h1>
                            <div className="col-12 mb-12 d-flex mb-5 justify-content-center ">
                                <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                            </div>
                        </div> 
                    </div>;

    return (
        <Fragment>
            <h1 className="my-5">Nombre Cita: {cita.nombre}</h1>
            <div className="container mt-1 py-5">                    
                    <div className="row">
                        <div className="col-12 mb-12 d-flex mb-5 justify-content-center ">
                            <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                            <Link to={`/cita/editar/${cita._id}`} className="ml-5 btn btn-warning text-uppercase py-2 px-5 font-weight-bold">Editar Cita</Link>
                            <button 
                            type="button" 
                            className="ml-5 btn btn-danger text-uppercase py-2 px-5 font-weight-bold"
                            //onClick={() => eliminarCita(cita._id)}
                            >Eliminar &times;</button>
                        </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                                <div className='d-flex w-100 justify-content-between mb-4'>
                                    <h3 className='mb-3'>{cita.nombre}</h3>
                                    <small className='fecha-alta'>
                                        {cita.fecha} - {cita.hora}
                                    </small>   
                                </div>
                                <p className='mb-0'> 
                                    {cita.sintomas} 
                                </p>

                                <div className='contacto py-3'>
                                    <p>Dueño: {cita.propietario}</p>
                                    <p>Telefono: {cita.telefono}</p>
                                </div>
                            </div>
                        </div>    
                        
                    
                    </div> 
            </div>
            <p>ID: {cita._id}</p>
            <p>Nombre: {cita.nombre}</p>
            <p>Fecha: {cita.fecha}</p>
            <p>telefono: {cita.telefono}</p>
            {/* Otros detalles de la cita */}
            </div>
        </Fragment>
    );
};

export default Cita;
