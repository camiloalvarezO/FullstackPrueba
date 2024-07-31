const paciente = require('../models/paciente')
//cuando creamos un nuevo cliente

exports.nuevoCliente = async(req,res,next) =>{
    
    const Paciente = new paciente(req.body)

    try {
         await Paciente.save()

        res.json({mensaje : "Se agregó a la base de datos correctamente"})
    } catch (error) {
        console.log('error creando paciente');
        console.log(error);
        next();
    }
}

exports.obtenerPacientes = async (req,res,next)=>{

    try {
        const pacientes = await paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log("error al obtener la lista de pacientes");
        console.log(error);
        next();
    }
}

exports.obtenerId = async (req,res,next) =>{

    try {
        const pacienteId = await paciente.findById(req.params._id);
        res.json(pacienteId);
    } catch (error) {
        console.log("Posiblemente no exista el id");
        console.log(error);
        next();        
    }
}