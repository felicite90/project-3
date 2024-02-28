const express = require('express');
const morgan = require('morgan');
const bodyParser=require('body-parser')



const app = express();

const fournisseurRouter = require('./routes/fournisseur.route');
const medicamenttRouter = require('./routes/medicament.route');
const clientRouter = require('./routes/client.route');
const commandeRouter = require('./routes/commande.route');
const achatRouter = require('./routes/achat.route');





app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))




app.use('/api/fournisseur', fournisseurRouter);
app.use('/api/medicament', medicamenttRouter);
app.use('/api/client', clientRouter);
app.use('/api/commande', commandeRouter);
app.use('/api/achat',achatRouter)


module.exports = app;