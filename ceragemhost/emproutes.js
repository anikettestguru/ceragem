var employee = require('./models/employee');

module.exports = {
  configure: function(app) {
    app.get('/employee/', function(req, res) {
      employee.get(res);
    });

	/*app.get('/user/:id/', function(req, res) {
      user.getuser(req.params.id, res);
    });

    app.post('/user/', function(req, res) {
      user.create(req.body, res);
    });

	app.post('/user/authenticate', function(req, res) {
      user.authenticate(req.body, res);
    });

    app.put('/user/resetpwd', function(req, res) {
      user.resetPassword(req.body, res);
    });

    app.delete('/user/:id/', function(req, res) {
      user.delete(req.params.id, res);
    });*/
  }
};
