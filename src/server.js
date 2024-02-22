import mongoose from mongoose


const app=require(`./app`);

const port =3000;

mongoose.connect(`${MONGO_URL}/paharmacieDB`).then(()=>{
    console.log('connected to database'+MONGO_URL)
    app.listen(PORT,()=>{
        console.log('le server est lancé sur le '+PORT) 
    }) 
   
    }).catch(error=>{console.log(error)
    throw new Error('erreur de connection à la base donnée')
})