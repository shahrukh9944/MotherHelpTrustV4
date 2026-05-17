const express = require("express");
const { router_admin } = require("./router/router_admin");
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(400).send("Weclome to Server");
});

app.use("/mht",router_admin);

app.listen(PORT, ()=>{
    console.log(`App is running on PORT:${PORT}`);
} );

