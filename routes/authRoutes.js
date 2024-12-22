const express = require("express");
const path = require("path");
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");
const { auth } = require("../firebaseConfig");

const router = express.Router();

// Sign Up Route
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    res.status(200).json({ redirect: "/home.html" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Sign In Route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    res.status(200).json({ redirect: "/home.html" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
