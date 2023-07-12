const express = require("express");
const router=express.Router();
const ctrl=require("./meeting.ctrl");


router.get("/create", ctrl.output.create);
router.post("/create", ctrl.process.create);
//router.get("/read",ctrl.process.read);

module.exports=router;