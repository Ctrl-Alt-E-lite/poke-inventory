const express = require("express");
const cors = require("cors");
const app = express();
//import routes
//const routes = require('./src/routes/index');

const sequelize = require('./src/db'); //database

//check database connection
sequelize
  .authenticate()
  .then((res) => console.log('Datanase is connected'))
  .catch((err) => {
    console.log('There was an error connecting to the database', error)
    process.exit(1);
  });

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "it works!" });
});
//app.use to use routes
//app.use('/api', routes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});