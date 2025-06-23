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
app.post("/login",async(req,res)=>{
  const getUsers= ()=> {
  const data = fs.readFileSync("Data.json", "utf-8");
  return JSON.parse(data);
}
   const { email, password } = req.body;
  const users = getUsers();
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(401).json({ message: "Invalid email" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }

  return res.status(200).json({ message: "Login successful", user });

  

})



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
