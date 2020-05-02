import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router"; //default 로 import하는 거랑 다름
//export -> import

const app = express();

const handleHome = (req, res) => res.send("Hello from my ass");
//클라이언트에게 실제로 반환되는

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);
/*누군가user라우터로 접속하면 유저라우터 전체를 사용하겠다*/

export default app;
