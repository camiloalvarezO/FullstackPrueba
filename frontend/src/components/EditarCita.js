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
            <h1>Editar Cita</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input 
                    type="text" 
                    name="nombre" 
                    value={cita.nombre} 
                    onChange={handleChange} 
                />
                <label>Propietario</label>
                <input 
                    type="text" 
                    name="propietario" 
                    value={cita.propietario} 
                    onChange={handleChange} 
                />
                <label>Teléfono</label>
                <input 
                    type="tel" 
                    name="telefono" 
                    value={cita.telefono} 
                    onChange={handleChange} 
                />
                <label>Fecha</label>
                <input 
                    type="date" 
                    name="fecha" 
                    value={cita.fecha} 
                    onChange={handleChange} 
                />
                <label>Hora</label>
                <input 
                    type="time" 
                    name="hora" 
                    value={cita.hora} 
                    onChange={handleChange} 
                />
                <label>Síntomas</label>
                <textarea 
                    name="sintomas" 
                    value={cita.sintomas} 
                    onChange={handleChange} 
                />
                <button type="submit">Guardar Cambios</button>
            </form>
            <Link to="/">Volver</Link>
        </Fragment>
    );
};

export default EditarCita;