const express = require('express');
const router = express.Router();

//definir route
exports.home = async (req, res)=>{
    res.json('Bravo nodeJS fonctionne !')
};
