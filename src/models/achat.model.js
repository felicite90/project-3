const mongoose=require('mongoose');
const { float } = require('webidl-conversions');


const achatSchema=mongoose.Schema({

    prix_unitaire:{
        type:float,
        type:false,
    },

    prix_total:{
        type:float,
        require:false,
    
    },
    quantite:{
        type:Number,
        require:false,
    }
})