const http = require("http");
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");


app.use(express.json());
const users = [
];
app.post("/users", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const newUser =  {
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    id: users.length + 1,
  };
  fs.writeFileSync("Data.json", JSON.stringify([...users, newUser], null, 2));
  users.push(newUser);
  res.status(201).json(newUser);
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
