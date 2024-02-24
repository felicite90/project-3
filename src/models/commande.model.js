const mongoose= require('mongoose');
const { float } = require('webidl-conversions');


const commandeSchema= new mongoose.Schema({

    libelle:{
        type:String,
        require:true,
    },
    quantite:{
        type:String,
        require: 1,
    },
    prix_unitaire:{
        type:float,
        require:false,
    },

prix_total:{
    type:float,
    require:false,

},
    client: {
        type: mongoose.Types.ObjectId,
        ref: 'Client',
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

})