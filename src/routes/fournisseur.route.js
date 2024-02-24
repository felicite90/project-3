const express=require('express');


export *as FournisseurCtl from "../controllerS/fourniseur.controller" ;


const fourniseurrouter=express.Router();

fourniseurRouter.post('/add fournisseur', FournisseurCtl.addfournisseur);


