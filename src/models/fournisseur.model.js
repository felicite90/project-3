const mongoose=require('mongoose');



const fournisseurSchema= new mongoose.Schema({


nom :{
 type: String,
 require:true   
},

prenom:{
    type:String,
    require:true
},
tel:{
    type:Number,
    require:true
},
email:{
    type:String,
    require:true,
},

ville:{
    type:String,
    require:true
}

})