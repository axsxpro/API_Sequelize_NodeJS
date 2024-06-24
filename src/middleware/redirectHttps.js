// src/middleware/redirectHttps.js
module.exports = (req, res, next) => {
  if (req.secure) {
    // La requête est déjà en HTTPS
    next();
  } else {
    // Rediriger vers HTTPS
    const host = req.headers.host.split(':')[0]; // Obtenir l'hôte sans le port
    res.redirect(`https://${host}:${process.env.PORT || 5000}${req.url}`);
  }
};
