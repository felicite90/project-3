const express=require('express');

import *as addAchatCtrl  from '../controllers/fournisseur.controller';


const achatRouter = express.Router();


achatRouterRouter.post('/add-achat', AchatCtrl.addAchat);






module.exports = achatRouterRouter;
