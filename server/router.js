const contrellers = require('./controllers');

const router = (app) => {
  app.get('/login', contrellers.Account.loginPage);
  app.post('/login', contrellers.Account.login);
  app.get('/signup', contrellers.Account.signupPage);
  app.post('/signup', contrellers.Account.signup);
  app.get('/logout', contrellers.Account.logout);
  app.get('/maker', contrellers.Domo.makerPage);
  app.get('/', contrellers.Account.loginPage);
};

module.exports = router;
