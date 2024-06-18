module.exports = (req, res, next) => {
  if (!req.secure) {
    const httpsUrl = `https://${req.headers.host.split(':')[0]}:${process.env.PORT || 5000}${req.url}`;
    res.redirect(301, httpsUrl);
  } else {
    next();
  }
};