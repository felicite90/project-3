import express from 'express';

import *as FournisseurCtrl  from '../controllers/fournisseur.controller'


const fournisseurRouter = express.Router();

fournisseurRouter.post('/login', FournisseurCtrl.login);
fournisseurRouter.post('/add-fournisseur', FournisseurCtrl.addFournisseur);


import *as FournisseurCtl from "../controllers/fournisseur.controller" ;



fourniseurRouter.post('/add-fournisseur', FournisseurCtl.addfournisseur);

module.exports = fournisseurRouter;

