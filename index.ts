import Koa from "koa";
import Router, {RouterContext} from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import {router as dogs} from "./routes/dogs";

import {router as user} from "./routes/user";

import {router as application} from "./routes/application";
import cors from "@koa/cors";

import serve from 'koa-static-folder';

const app: Koa = new Koa();
const router: Router = new Router();
const welcomeAPI = async (ctx: RouterContext, next: any) => {
  ctx.body = {
    message: "Welcome to the Dog Shelter !"
  };
  await next();
}

router.get('/api/v1', welcomeAPI);
app.use(logger());
app.use(json());
app.use(router.routes());
app.listen(10888);

app.use(dogs.routes());

app.use(user.routes());

app.use(application.routes());
app.use(cors());

app.use(serve('./docs'));

