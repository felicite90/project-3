const express = require('express');


export *as AchatCtl from "../controllers/achat.controller";


achatRouter.post('/add-achat',AchatCtl.addachat);
