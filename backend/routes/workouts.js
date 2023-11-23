const express = require("express");
const workouts = require("../models/workoutModel");
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
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await workouts.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
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
