const express = require("express");
const router = new express.Router();
const Student = require("../models/structure");

// create student
router.post("/students", async (req, res) => {
  try {
    console.log(req.body);
    const user = new Student(req.body);
    const newUserDetails = await user.save();
    res.status(201).send(newUserDetails);
  } catch (e) {
    res.status(400).send(e);
    console.log("can't send successfully");
  }
});

// show students
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (e) {
    res.send(e);
  }
});

// find students
router.get("/students/:name", async (req, res) => {
  try {
    const _name = req.params.name;
    const stdData = await Student.findOne({ name: _name });
    if (!stdData) {
      res.send("Can't Get This name");
    } else {
      res.send(stdData);
    }
  } catch (e) {
    res.send(e);
  }
});

// update students
router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate(_id, req.body);
    res.send(updateStudent);
  } catch (e) {
    res.status(404).send(e);
    console.log(e);
  }
});

// delete students
router.delete("/students/:id", async (req, res) => {
  try {
    const delStudent = await Student.findByIdAndDelete(req.params.id);
    console.log(delStudent);
    res.send(delStudent);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
