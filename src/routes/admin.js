var express = require('express');

var auth = require('../auth');
var members = require('../models/members');
var orders = require('../models/orders');
var replies = require('../models/replies');

var admin = express.Router();
var getToken = auth.getToken;
var checkToken = auth.checkToken;
var authCheck = auth.authCheck;

exports = module.exports = admin;

admin.post(/[a-z,A-Z]/g, checkToken);
admin.post(/[a-z,A-Z]/g, authCheck);

admin.post('/login', function(req, res, next) {
  // generate authData
  var authData = {};
  authData['username'] = req.body.username;
  authData['password'] = req.body.password;

  // permission query
  var target = {
    account: authData['username']
  };

  // generate resData
  var resData = {};

  // operate database
  members.findOne(target, function(error, result) {
    if (error) {
      next(error);
    } else {
      if (authData['password'] !== result.password) {
        var passwordError = new Error('password incorrect');
        next(passwordError);
      } else {
        if (result.admin) {
          authData['auth'] = 'admin';
        } else {
          authData['auth'] = 'knight';
        }
      }

      req.auth = authData;

      getToken(req, res, next);

      resData['success'] = true;
      res.json(resData);
      res.end();
      next();
    }
  });
});

admin.post('/logout', function(req, res, next) {
  // clear cookie
  res.clearCookie('token');
  var resData = {};
  resData['success'] = true;
  res.json(resData);
  res.end();
  next();
});

admin.post('/modifyPassword', function(req, res, next) {
  // generate authData
  var authData = req.auth;

  // generate reqData
  var reqData = req.body;

  // generate value and target
  var value = {
    password: reqData.newPassword
  };
  var target = {
    account: authData.username
  };

  // generate resData
  var resData = {};

  // operate database
  if (authData.password !== reqData.oldPassword) {
    throw new Error('password incorrect');
  } else {
    members.update(value, target, function(error, result) {
      if (error) {
        next(error);
      } else {
        console.log(result);

        resData['success'] = true;
        res.json(resData);
        res.end();
        next();
      }
    });
  }
});

admin.post('/listAppointments', function(req, res, next) {
  // generate reqData
  var reqData = req.body;

  // generate target
  var target = {
    location: reqData.campus,
    status: reqData.status
  };

  // generate resData
  var resData = {};

  orders.findAll(target, function(error, result) {
    if (error) {
      next(error);
    } else {
      // generate baseData
      baseData = JSON.parse(JSON.stringify(result));

      res.json(baseData);
      res.end();
      next();
    }
  });
});

admin.post('/acceptAppointment', function(req, res, next) {
  // generate authData
  var authData = req.auth;

  // generate reqData
  var reqData = req.body;

  // generate target
  var target = {
    account: authData.username
  };

  // generate resData
  var resData = {};

  // operate database
  members.findOne(target, function(error, result) {
    if (error) {
      next(error);
    } else {
      // generate baseData
      baseData = JSON.parse(JSON.stringify(result));

      // generate value and target
      var value = {
        handler: baseData.id
      };
      var target = {
        id: reqData.appointmentId
      };

      // operate database
      orders.update(value, target, function(error, result) {
        if (error) {
          next(error);
        } else {
          resData['success'] = true;
          res.json(resData);
          res.end();
          next();
        }
      });
    }
  });
});

admin.post('/reply', function(req, res, next) {
  // generate authData
  var authData = req.auth;

  // generate reqData
  var reqData = req.body;

  // generate target
  var target = {
    account: authData.username
  };

  // generate resData
  var resData = {};

  // operate database
  members.findOne(target, function(error, result) {
    if (error) {
      next(error);
    } else {
      // generate baseData
      baseData = JSON.parse(JSON.stringify(result));

      // generate value and target
      var target = {
        replybool: 1,
        orderid: reqData.appointmentId,
        itxiaid: baseData.id,
        content: reqData.content
      };

      // operate database
      replies.create(target, function(error, result) {
        if (error) {
          next(error);
        } else {
          resData['success'] = true;
          res.json(resData);
          res.end();
          next();
        }
      });
    }
  });
});

admin.post('/createMember', function(req, res, next) {
  // generate reqData
  var reqData = req.body;

  // generate target
  var target = {
    name: reqData.name,
    account: reqData.username,
    password: reqData.password,
    location: reqData.location,
    admin: reqData.admin
  };

  // generate resData
  var resData = {};

  // operate database
  members.create(target, function(error, result) {
    if (error) {
      next(error);
    } else {
      resData['success'] = true;
      res.json(resData);
      res.end();
      next();
    }
  })
});

admin.post('/listAllMembers', function(req, res, next) {
  // generate resData
  var resData = {};

  // operate database
  members.findAll(null, function(error, result) {
    if (error) {
      next(error);
    } else {
      // generate baseData
      var baseData = JSON.parse(JSON.stringify(result));

      res.json(baseData);
      res.end();
      next();
    }
  })
});

admin.post('/modifyMemberPassword', function(req, res, next) {
  // generate reqData
  var reqData = req.body;

  // generate value and target
  var value = {
    password: reqData.newPassword
  };
  var target = {
    id: reqData.memberId
  };

  // generate resData
  var resData = {};

  members.update(value, target, function(error, result) {
    if (error) {
      next(error);
    } else {
      resData['success'] = true;
      res.json(resData);
      res.end();
      next();
    }
  });
});
