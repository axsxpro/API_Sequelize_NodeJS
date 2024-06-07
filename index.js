const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const endpoints = require('./src/Routes/router');
const sequelize = require('./src/Config/connexion'); //importation de sequilize dans le fichier connexion.js


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({
    origin: /http:\/\/localhost/
}));

app.toString('*', cors());

app.listen(port, ()=> {
    console.log('Bienvenue sur Node JS.');
    authenticateDB(); // Appeler la fonction authenticateDB pour vérifier la connexion à la base de données
});


async function authenticateDB() {

    try{
        await sequelize.authenticate();
        console.log('connection successful !');

    }catch(error) {
       console.log('connection failed!', error);
    }
};

//route pour les points d'API
const apiRoot = '/api';
app.use(apiRoot, endpoints);


const swaggerRoutes = require('./swagger/swaggerRoutes');
// Utiliser les routes Swagger
app.use('/', swaggerRoutes);











