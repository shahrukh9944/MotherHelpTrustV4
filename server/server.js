const express = require("express");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(400).send("Weclome to Server");
});

app.listen(PORT, ()=>{
    console.log(`App is running on PORT:${PORT}`);
} );

