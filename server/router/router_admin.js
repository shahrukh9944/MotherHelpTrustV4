const express = require("express");
const {handleAdminLogin} = require("../controller/controller_adminlogin");

const router_admin = express.Router();

router_admin.post("/admin",handleAdminLogin);

module.exports = {router_admin};