const mongoose = require('mongoose')

const app = require('./app');

const PORT = 3000;
const MONGO_URL = 'mongodb://localhost:27017';

mongoose.connect(`${MONGO_URL}/pharmacieDB`).then(()=>{
    console.log('connected to database'+MONGO_URL)
    app.listen(PORT,()=>{
        console.log('le server est lancé sur le '+PORT) 
    }) 
   
    }).catch(error=>{console.log(error)
    throw new Error('erreur de connection à la base donnée')
})