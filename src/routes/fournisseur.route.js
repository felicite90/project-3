const express=require('express');


export *as FournisseurCtl from "../controllers/fournisseur.controller" ;



fourniseurRouter.post('/add-fournisseur', FournisseurCtl.addfournisseur);


