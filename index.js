import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from my ass");
//클라이언트에게 실제로 반환되는

const handleProfile = (req, res) => res.send("You are on my profile");

//middleware
const betweenHome = (req, res, next) => {
  console.log("between");
  //next 허용을 해줘야 handleHome으로 넘어갈 수 있음
  next();
};

app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
