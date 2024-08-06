import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import clienteAxios from "./config/axios";

const EditarCita = ({ guardarConsultar }) => {
    const { _id } = useParams();
    const navigate = useNavigate();

    const [cita, setCita] = useState({
        nombre: '',
        propietario: '',
        telefono: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    useEffect(() => {
        const obtenerCita = async () => {
            const resultado = await clienteAxios.get(`/pacientes/${_id}`);
            setCita(resultado.data);
        };
        obtenerCita();
    }, [_id]);

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        await clienteAxios.put(`/pacientes/${_id}`, cita);
        guardarConsultar(true);
        navigate('/');
    };

    return (
        <Fragment>
            <h1 className="my-5">Editar Cita</h1>
    
            <div className="container mt-5 py-5">                    
                <div className="row">
                    <div className="col-12 mb-12 d-flex mb-5 justify-content-center ">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>
                </div> 
    
                <div className='col-md-8 mx-auto'>
                    <form onSubmit={handleSubmit} className='bg-white p-5 bordered'>
                        <div className='form-group'>
                            <label htmlFor='nombre'>Nombre Mascota</label>
                            <input
                                type='text'
                                className='form-control'
                                id='nombre'
                                name='nombre'
                                value={cita.nombre}
                                onChange={handleChange}
                            />
                        </div>
    
                        <div className='form-group'>
                            <label htmlFor='propietario'>Nombre Propietario</label>
                            <input
                                type='text'
                                className='form-control'
                                id='propietario'
                                name='propietario'
                                value={cita.propietario}
                                onChange={handleChange}
                            />
                        </div>
    
                        <div className='form-group'>
                            <label htmlFor='telefono'>Telefono</label>
                            <input
                                type='tel'
                                className='form-control'
                                id='telefono'
                                name='telefono'
                                value={cita.telefono}
                                onChange={handleChange}
                            />
                        </div>
    
                        <div className='form-group'>
                            <label htmlFor='fecha'>Fecha Alta</label>
                            <input
                                type='date'
                                className='form-control'
                                id='fecha'
                                name='fecha'
                                value={cita.fecha}
                                onChange={handleChange}
                            />
                        </div>
    
                        <div className='form-group'>
                            <label htmlFor='hora'>Hora Alta</label>
                            <input
                                type='time'
                                className='form-control'
                                id='hora'
                                name='hora'
                                value={cita.hora}
                                onChange={handleChange}
                            />
                        </div>
    
                        <div className='form-group'>
                            <label htmlFor='sintomas'>Sintomas</label>
                            <textarea
                                className='form-control'
                                name='sintomas'
                                rows='6'
                                value={cita.sintomas}
                                onChange={handleChange}
                            ></textarea>
                        </div>
    
                        <button type='submit' className='btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold'>
                            Guardar Cambios
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
};

export default EditarCita;