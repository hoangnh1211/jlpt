var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var bodyParser = require('body-parser');
require('dotenv/config')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var practiceRouter = require('./routes/practice');
var examsRouter = require('./routes/Exams');
var authRouter = require('./routes/auth')
var uploadRouter = require('./routes/upload')
var pointRouter = require('./routes/point')

var db = require('./Database');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'));


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/', authRouter);
app.use('/users', usersRouter);
app.use('/exams', examsRouter);
app.use('/practice', practiceRouter);
app.use('/charts', examsRouter);
app.use('/file', uploadRouter)
app.use('/point',pointRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});