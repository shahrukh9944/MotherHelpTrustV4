// const express = require("express");

// const controller_adminlogin = express();

const handleAdminLogin = async(req,res) =>{
    return res.status(200).json({"message":"Welcome to Admin Login"});
}

module.exports = {handleAdminLogin};