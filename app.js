var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('app');
var app = express();

//routes
var login = require('./routes/login');
var signup = require('./routes/signup');
var buy = require('./routes/buy');
var employee = require('./routes/employee');
var account = require('./routes/account');
var designer = require('./routes/designer');
var customer = require('./routes/customer');
var order = require('./routes/order');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/theme/project/img/favicon.ico'));

//routes register
app.use('/data/Login', login);
app.use('/data/Signup', signup);
app.use('/data/Buy', buy);
app.use('/data/Employee', employee);
app.use('/data/Account', account);
app.use('/data/Designer', designer);
app.use('/data/Customer', customer);
app.use('/data/Order', order);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// module.exports = app;

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});