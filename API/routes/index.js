const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers')
module.exports = function() {

    router.get('/', (req, res) => {
        res.send('API funcionando');
    });

    router.get('/pacientes', 
        pacienteController.obtenerPacientes    
    );

    router.post('/pacientes',
        pacienteController.nuevoCliente
    )

    router.get('/pacientes/:_id',
        pacienteController.obtenerId
    )

    return router
}