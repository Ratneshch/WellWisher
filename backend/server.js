const express = require("express");
require("dotenv").config();
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

//  Validators
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone) => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
};

const isValidName = (name) => {
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  return nameRegex.test(name.trim());
};

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, car, message } = req.body;

    //  Required check
    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Missing required fields" });
    }

   // Name
if (!/^[A-Za-z\s]{2,}$/.test(name.trim())) {
  return res.status(400).json({
    message: "Name must contain at least 2 letters",
  });
}

// Email
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  return res.status(400).json({
    message: "Please enter a valid email address",
  });
}

// Phone
if (!/^\d{10}$/.test(phone)) {
  return res.status(400).json({
    message: "Phone number must be exactly 10 digits (numbers only)",
  });
}


    // Insert into DB
    const [result] = await pool.query(
      `INSERT INTO test_drive_requests 
       (name, email, phone, selected_car, message) 
       VALUES (?, ?, ?, ?, ?)`,
      [name.trim(), email.trim(), phone, car || null, message || null]
    );

    res.status(201).json({
      message: "Form saved successfully",
      id: result.insertId,
    });
  } catch (err) {
    console.error("Error in /api/contact:", err);
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
