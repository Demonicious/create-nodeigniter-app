const NodeIgniter = require('nodeigniter.js');

const config = require('./app/config/config');
const database = require('./app/config/database');
const routes = require('./app/config/routes');

const app = new NodeIgniter.Instance;
app.configure(config);
app.setDatabase(database);
app.registerRoutes(routes);
app.launch();