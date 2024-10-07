const express = require ("express");
require("dotenv").config();
var morgan = require ("morgan");
const base_route = require ("./Routes/BasicRoutes");


const app = express();
app.use (morgan("dev"));
app.use('/api',base_route)


app.listen (process.env.port,()=>{
    console.log(`server is up and running in ${process.env.port}`);
})