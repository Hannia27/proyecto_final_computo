const auxiliar = {};

auxiliar.estaAutenticado = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error_msg', 'NO AUTORIZADO')
    res.redirect("/users/signin");
};


auxiliar.esAdmin = (req, res, next) => {
    if (req.user.isAdmin) {
        return next();
    }
    req.flash("error", "RECUERDA QUE NO ERES CLIENTE PREMIUM, TE SUGERIMOS CONTRATAR ALGÚN PLAN.");
    res.redirect("/notes");
};

module.exports = auxiliar;

