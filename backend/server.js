const http = require("http");
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.json());
const users = [
  {
    username: "testuser",
    email: "test123@gmail.com",
    password: "testpassword",
    id: 1,
  },
];
app.post("/users", (req, res) => {
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    id: users.length + 1,
  };
  fs.writeFileSync("Data.json", JSON.stringify([...users, newUser], null, 2));
  users.push(newUser);
  res.status(201).json(newUser);
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
