const helpers = {};
const User = require("../models/User");

helpers.estaAutenticado = async (contrasena) => {
  if(req.isAuthenticated()){
    return await next();
  }
  res.redirect('/users/signin')
};

helpers.isAdmin = (req, res, next) => {
    if(req.user.is_admin === 0){
        res.redirect("/products");
    }
    next();
  };

module.exports = helpers
