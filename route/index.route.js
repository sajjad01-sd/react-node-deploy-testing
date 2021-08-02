const express = require("express");
const router = express.Router();
const model = require("../model/index.model");

router.get("/api/test/:id", function (req, res) {
  model.getTest(req, res, req.params.id);
  console.log("--Route-", req.params.id);
});

router.get("/api/allleads", function (req, res) {
  model.getAllLeads(req, res);
  // console.log('--Route-',req.params.id)
});

router.post("/api/getFilterData", function (req, res) {
  model.getFilterData(req, res, req.body);
});

router.post("/api/async", function (req, res) {
  model.asyncTest(req, res, req.body);
});

router.post("/api/setLead", function (req, res) {
  model.setLeads(req, res, req.body);
});

router.post("/api/setSheet", function (req, res) {
  model.setSheet(req, res, req.body);
});
router.get("/api/User", function (req, res) {
  model.getUser(req, res);
});

module.exports = router;
