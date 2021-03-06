var connection = require('../connection');

function user() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from emp_detail where role = ?', ['employee'], function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  /*this.getuser = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from emp_detail where emp_id = ? ', [id], function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(user, res) {
    connection.acquire(function(err, con) {
	  console.log(user);
      con.query('insert into emp_detail (fname, lname, dob, contactnum, email, passwd, role) VALUES (?,?,?,?,?,?,?)', [user.data.fname,user.data.lname, 
	  user.data.dob,user.data.contactnum,user.data.email,user.data.passwd,'employee'] ,
	  function(err, result) {
			con.release();
			if (err) {
			  res.send({status: false, message: 'User creation failed'});
			} else {
			  res.send({status: true, message: 'User created successfully'});
			}
      });
    });
  };

  this.authenticate = function(user, res) {
    connection.acquire(function(err, con) {
      con.query('select * from emp_detail where email = ? and passwd = ?', [user.data.email, user.data.password] ,
	  function(err, result) {
			con.release();
			if (err) {
			  res.send({status: false, message: 'authentication failed'});
			} else {
			  res.send({status: true, data: result});
			}
      });
    });
  };

  this.resetPassword = function(user, res) {
    connection.acquire(function(err, con) {
      con.query('update emp_detail set passwd = ? where emp_id = ?', [user.id, user.passwd], function(err, result) {
        con.release();
        if (err) {
          res.send({status: false, message: 'TODO update failed'});
        } else {
          res.send({status: true, message: 'TODO updated successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from emp_detail where emp_id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: false, message: 'Failed to delete'});
        } else {
          res.send({status: true, message: 'Deleted successfully'});
        }
      });
    });
  };*/
}

module.exports = new user();
