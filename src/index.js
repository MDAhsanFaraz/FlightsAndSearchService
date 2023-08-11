const express = require("express");
const bodyparser = require("body-parser");

const { PORT } = require('./config/serverConfig');
const ApiRoutes =require('./routes/index');

const setupAndStartServer = async () => {
          // create the express object
          const app = express();

          app.use(bodyparser.json());
          app.use(bodyparser.urlencoded({ extended: true }));

          app.use('/api',ApiRoutes);

          app.listen(PORT, async () => {
                    console.log(`Server started at ${PORT}`);
          });
}

setupAndStartServer(); 