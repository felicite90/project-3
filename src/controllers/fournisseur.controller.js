const express = require('express');

import Fournisseur from "../models/fournisseur.model";



export const addFournisseur = async (req, res) => {
    
    const data = req.body;

    try {
        const fournisseur = await Fournisseur.findOne({email: data.email});
        if (fournisseur) {
            res.status(301).json({
                message: 'Le founisseur existe déjà'
            })
        }else{
            const newFournisseur = new Fournisseur(data);
            await newFournisseur.save();
            res.status(201).json({
                message: 'Le fournisseur a été bien enregistré'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Erreur : '+error
        })
    }
}
