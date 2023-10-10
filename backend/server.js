import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
const port = 5000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});

const edituserData = (users) => {
  try {
    fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));
  } catch (error) {
    console.error("error writing file", error);
  }
};

app.get("/api/data", (req, res) => {
  const dataJson = fs.readFileSync("./data.json");
  const data = JSON.parse(dataJson);
  res.send(data);
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const userJson = fs.readFileSync("./users.json");
  const user = JSON.parse(userJson);
  const usermatched = user.find(
    (user) => user.username === username && user.password === password
  );
  if (usermatched) {
    res.json({ message: "login successful", user: usermatched });
  } else {
    res.status(401).json({ message: "invalid username or password" });
  }
});

app.post("/api/register", (req, res) => {
  const { username, password } = req.body;
  const regJson = fs.readFileSync("./users.json");
  const users = JSON.parse(regJson);
  const addUser = {
    id: users.length + 1,
    username: username,
    password: password,
    cart: [],
  };
  users.push(addUser);
  edituserData(users);
  return res.json({ message: "register successful" });
});
