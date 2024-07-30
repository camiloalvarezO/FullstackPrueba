const express = require('express');
const { Mongoose, default: mongoose } = require('mongoose');

// inicializar el servidor de express
const app = express()

const puerto = 3000 || 4000;

Mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
    

})

app.listen(puerto, ()=>{
    console.log(`Aplicación funcionando en el puerto ${puerto}`);
})