import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { localsMiddleware } from "./middlewares";
import userRotuer from "./routers/userRouter";
import videoRotuer from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";


const app = express();

app.use(helmet()); // 보안 관련
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(morgan("dev")); // 로깅 (로그)

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRotuer);
app.use(routes.videos, videoRotuer);

export default app;