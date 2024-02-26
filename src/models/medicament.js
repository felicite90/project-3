const mongoose=require('mongoose');
const { float } = require('webidl-conversions');


const medicamentSchema=mongoose.Schema({
    libelle:{
        type:String,
        require:true,
    },
    stock:{
        type:Number,
    },
    prix_unitaire:{
        type:float,
        require:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})