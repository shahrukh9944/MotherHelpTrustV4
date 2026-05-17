// const express = require("express");

// const controller_adminlogin = express();

const handleAdminLogin = async(req,res) =>{
    const data = "Welcome to Admin Login";
    const data2 = await data;

    return res.status(200).json({"result":data2});
}

module.exports = {handleAdminLogin};