const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');

const cookieParser = require('cookie-parser');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const customWare = require('./config/middlware');

//setting a value for the property//stp1 
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('assets'));
//mongo-store is used to store the session cookie in the db
app.use(session({
    name: 'To do list',
    //todo change the secret before development in production mode
    secret: 'Something',
    saveUninitialized: false, //if the  session is there and not in use
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore({
            mongooseConnection: db,
            autoRemove: 'disabled'
        },
        function(err) {
            console.log(err || 'connect-mongodb setupok');
        }
    )
}));
/** Use flash  */
app.use(flash());
app.use(customWare.setFlash);
//use route module
app.use('/', require('./routes'));

app.listen(port, function(err) {
    if (err) {
        console.log(`error in running server:${err}`); // interpolation :including a variable inside a string
    }

    console.log(`Server is running on port:${port}`);
});