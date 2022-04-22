const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "shavana", email: "shabana@gmail.com", mobile: "01718380718" },
  { id: 2, name: "soli", email: "soli@gmail.com", mobile: "01718380718" },
  { id: 3, name: "loi", email: "loi@gmail.com", mobile: "01718380718" },
  { id: 4, name: "lami", email: "lami@gmail.com", mobile: "01718380718" },
  { id: 5, name: "kali", email: "kali@gmail.com", mobile: "01718380718" },
  { id: 6, name: "jamo", email: "jamo@gmail.com", mobile: "01718380718" },
];

app.get("/", (req, res) => {
  res.send("mu second node ");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});
app.post("/user", (req, res) => {
  console.log("request", req.body);
  res.send("post method sucess");
});

app.listen(port, () => {
  console.log("listening to port", port);
});
