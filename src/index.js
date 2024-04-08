import { Hono } from "hono";
import userRouter from "./routes/userRouter";
// import { createUser, getUsers } from "./user";

const app = new Hono();
app.route("/user", userRouter);

export default app;
