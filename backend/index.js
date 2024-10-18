import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/signin", async (req, res, next) => {
  console.log("ok");
  const token = jwt.sign({ id: 123 }, "HelloFuckyou", { expiresIn: "1D" });
  res.status(200).cookie("refreshToken", token, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  }).send({code: 123});
});

app.listen(4000, () => {
  console.log(`app is runing on port 4000`);
});
