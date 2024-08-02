const express = require('express');
const { Mongoose, default: mongoose } = require('mongoose');
const routes = require('./API/routes');
const bodyParser = require('body-parser')
const cors = require('cors')
// inicializar el servidor de express
const app = express()

const puerto = 4000 || 4001;

// se le puede decir a cors que haga una whitelist de ips de esta forma
// const whitelist = ['http://localhost:3000'];
// const corsOptions = {
//     origin: (origin, callback) =>  {
//         // console.log(origin);
//         const existe = whitelist.some( dominio => dominio === origin);
//         if ( existe ) {
//             callback(null, true)
//         } else {
//             callback(new Error('No Permitido por CORS'))
//         }
//     }
// }

app.use(cors())
Mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    
})
//habilitar body-parser
// resumen: coge lo que envia el usuario en la petición y lo manda para el controlador automaticamente como una variable
app.use(bodyParser.json()) //retorna un middleware que convierte un json y se fija que en una solicitud tenga 
                        // el tipo de header que se le especifica con respecto a un tipo
app.use(bodyParser.urlencoded({extended:true})) // retorna un middleware en el que convierte los bodys que vienen de un url codificado en el que 
                    // el header es de el tipo especificado 

//habilitar routing
app.use('/', routes())

app.use((err, req, res, next) => {
    if (err) {
        console.error('Error en body-parser:', err);
        res.status(400).send('Invalid JSON');
    } else {
        next();
    }
});

app.listen(puerto, ()=>{
    console.log(`Aplicación funcionando en el puerto ${puerto}`);
})