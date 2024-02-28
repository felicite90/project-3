const express=require('express');

import *as FournisseurCtrl  from '../controllers/fournisseur.controller';


const fournisseurRouter = express.Router();


fournisseurRouter.post('/add-fournisseur', FournisseurCtrl.addFournisseur);






module.exports = fournisseurRouter;

