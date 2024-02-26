const express = require('express');


import*as AchatCtl from "../controllers/achat.controller";


achatRouter.post('/add-achat',AchatCtl.addachat);
