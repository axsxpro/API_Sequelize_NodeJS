const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const homePage = require('./src/Routes/homeRoutes');
const endpoints = require('./src/Routes/router'); //importation des endpoints en passant par un router
const authRoutes = require('./src/Routes/authRoutes'); //importation des routes d'authentification
const sequelize = require('./src/Config/connexion'); //importation de sequilize dans le fichier connexion.js
require('dotenv').config(); // Charger les variables d'environnement
const swaggerRoutes = require('./swagger/swaggerRoutes');
const helmet = require('helmet');
const http = require('http'); // Importer le module HTTP
const https = require('https'); // Importer le module HTTPS
const fs = require('fs'); // Importer le module FS
const path = require('path'); // Importer le module Path
const redirectToHttps = require('./src/middleware/redirectHttps'); // Importer le middleware de redirection



/**********INITIALISATION APP **************/

const app = express();
const port = process.env.PORT || 5000;
const httpPort = process.env.HTTP_PORT || 3000;

//sécuriser le header
app.use(helmet());


// Configurer HTTP Strict Transport Security (HSTS) pour forcer l'utilisation de HTTPS
app.use(helmet.hsts({
  maxAge: 63072000, // Durée de validité en secondes (2 ans)
  includeSubDomains: true, // Appliquer HSTS à tous les sous-domaines
  preload: true // Inclure ce domaine dans la liste de préchargement HSTS
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({
    origin: /http:\/\/localhost/
}));

app.toString('*', cors());


// Charger les certificats SSL/TLS auto-signés depuis le dossier certs
const privateKey = fs.readFileSync(path.join(__dirname, 'cert', 'key.pem'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'), 'utf8');
const credentials = { key: privateKey, cert: certificate };


// Créer un serveur HTTPS avec les certificats chargés et l'application Express
const httpsServer = https.createServer(credentials, app);


// Démarrer le serveur HTTPS sur le port spécifié (5000)
httpsServer.listen(port, ()=> {
    console.log('Bienvenue sur Node JS! Serveur HTTPS démarré sur port:', `${port}`);
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

//page d'accueil
app.use('/', homePage);

//route pour les points d'API
const apiRoot = '/api';
app.use(apiRoot, endpoints);

//route pour l'authentification
const authRoot = '/auth';
app.use(authRoot, authRoutes);

// Utiliser les routes Swagger
app.use('/', swaggerRoutes);


// Créer un serveur HTTP pour la redirection
const httpApp = express();

// Utiliser le middleware de redirection HTTPS pour toutes les requêtes HTTP
httpApp.use(redirectToHttps);

const httpServer = http.createServer(httpApp);

// Démarrer le serveur HTTP pour redirection
httpServer.listen(httpPort, () => {
  console.log('Serveur HTTP de redirection démarré sur le port:', `${httpPort}`);
});








