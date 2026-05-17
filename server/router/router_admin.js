const express = require("express");
const {handleAdminLogin} = require("../controller/controller_adminlogin");

const router_admin = express.Router();

router_admin.get("/admin",handleAdminLogin);

module.exports = {router_admin};