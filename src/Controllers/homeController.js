const express = require('express');
const router = express.Router();

//definir route
router.get('/', (req, res)=>{
    res.json('Bravo nodeJS fonctionne !')
});
