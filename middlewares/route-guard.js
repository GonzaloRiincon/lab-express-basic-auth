const isLoggedIn = (req, res, next) => {
    if (req.session.currentUser) next()
    else {
        res.render('auth/login', { errorMessage: 'Log in to continue' })
    }
}
const isLoggedOut = (req, res, next) => {
    if (!req.session.currentUser) next()
    else {
        res.redirect('/profile')
    }
}


module.exports = { isLoggedIn, isLoggedOut }