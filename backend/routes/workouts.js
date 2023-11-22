const express = require("express");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all Workouts" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single Workout" });
});

// POST a new workout
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new Workout" });
});

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a Workout" });
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a Workout" });
});

module.exports = router;
