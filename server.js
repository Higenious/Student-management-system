const express = require('express');
const app = express();
const port  = 3000;
const bodyParser = require('body-parser');
const log4js = require('log4js');
const logger = log4js.getLogger();
const dbConnection = require("./dbConnection/dbConnection");
logger.level = 'debug';
logger.debug("server");
const router = require("./router/usersRoute")


/** index  */
app.get('/', (req, res)=>{
    logger.info('wellcome to student managemnt systems');
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

/** import all routes */
logger.info("routes  initializing");
app.use('/api/v1', router); 


/** listen server */
app.listen(port,()=>{
    logger.info(`server successfully started running on ${port}`);
})