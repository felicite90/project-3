const mongoose =require('mongoose');



const factureSchema=mongoose.Schema({
    paye:{
        type:Number,
        require:true,   
    },
    reste:{
        type:Number,
        require:true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }


})