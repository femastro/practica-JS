const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

// Setting
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

// Middllewares
app.use((req, res, next) => {
    console.log(`${req.url} - ${req.method}`);
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

// Routes
app.use(routes);

// Start Server
app.listen(PORT, () => console.log(`Server runnig in PORT => ${PORT}`))



