const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let test = [];

//add users
app.post("/addingUser", (req, res) => {
  test.push(req.body);
  res.json({
    bruh: "user added successfully",
    data: test,
  });
});

//getting the users
app.get("/allusers", (req, res) => {
  res.json(test);
});

//running the server
app.listen(3000, () => {
  console.log("server is running :)");
});
