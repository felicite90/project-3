const express = require('express');
import Produit from "../models/produit.model";

export const addProduct = async () => {
    const data = req.body;
    const isDescription = req.query.isDescription;
    try {
        data.fournisseur = userData.userId;
        const newProduit = new Produit(data);
        await newProduit.save();
        res.status(202).json({
            message: 'Le produit a ete enregistre!',
            userData,
            newProduit
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error: '+error
        })
    }
}