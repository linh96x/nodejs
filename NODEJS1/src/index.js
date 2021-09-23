const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');
const route = require('./routers');
//conect db
const db = require('./config/db');
db.connect();
//img/logo.png
app.get(express.static(path.join(__dirname, 'public')));
//weqe
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));
app.get(
  express.urlencoded({
    extended: true,
  }),
);
app.get(express.json());

//http
//app.use(morgan('combined'));//tam tat
//template
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
//route
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
