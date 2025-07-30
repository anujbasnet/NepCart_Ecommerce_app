const http = require("http");
const express = require("express");
const app = express();
const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());

app.post("/users", async (req, res) => {
  const getUsers = () => {
    try {
      const data = fs.readFileSync("Data.json", "utf-8");
      return JSON.parse(data);
    } catch {
      return [];
    }
  };

  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = Date.now() + 5 * 60 * 1000;
  const users = getUsers();
  const { username, email, password } = req.body;
  const existUser = users.find((u) => u.email === email);
  if (existUser) {
    return res.status(401).json({ message: "Email already exists!" });
  } else {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      id: users.length + 1,
      code,
      expiresAt,
      isVerified: false,
    };
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    fs.writeFileSync("Data.json", JSON.stringify([...users, newUser], null, 2));
    users.push(newUser);
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Verification Code",
      html: `<p>Your 6-digit code is: <strong>${code}</strong></p>`,
    });
    res.json({ message: "Verification code sent!" });
  }
});

//Login
app.post("/users/login", async (req, res) => {
  const getUsers = () => {
    try {
      const data = fs.readFileSync("Data.json", "utf-8");
      return JSON.parse(data);
    } catch {
      return [];
    }
  };
  const users = getUsers();
  const { username, email, password } = req.body;
  const existUser = users.find((u) => u.email === email);
  if (!existUser) {
    return res.status(404).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, existUser.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }
  if (!existUser.isVerified) {
    return res.status(403).json({ message: "Please verify your email first" });
  }

  // Generate JWT token
  const token = jwt.sign(
    { id: existUser.id, email: existUser.email, username: existUser.username }, // payload
    process.env.JWT_SECRET,
    { expiresIn: "365d" } // token valid for 1 hour
  );

  return res.status(200).json({
    message: "Login successful",
    token, // send token to client
  });
});

//OTP Verification
app.post("/handleVerification", async (req, res) => {
  const { email, OTP } = req.body;
  try {
    const data = await fsp.readFile("Data.json", "utf-8");
    const users = JSON.parse(data);
    const existUser = users.find((u) => u.email === email);

    if (!existUser) {
      return res.status(404).json({ message: "User not found" });
    }

    if (Date.now() > existUser.expiresAt) {
      return res.status(400).json({ message: "Code expired" });
    }

    if (String(OTP) === String(existUser.code)) {
      existUser.isVerified = true;
      existUser.code = null;
      existUser.expiresAt = null;

      await fsp.writeFile("Data.json", JSON.stringify(users, null, 2));
      return res.status(200).json({ message: "Verification successful" });
    } else if (String(OTP) !== String(existUser.code)) {
      return res.status(400).json({ message: "Invalid code" });
    }
  } catch (error) {
    console.error("Verification error:", error);
    return res.status(500).json({ message: "Something went wrong", error });
  }
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
