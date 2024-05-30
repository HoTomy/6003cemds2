import Router, { RouterContext } from "koa-router";
import bodyParser from "koa-bodyparser";
import { validateApplication } from "../controllers/validation";

const router = new Router({ prefix: "/api/v1/application" });

const application = [
  {
    username: "test123",
    email: "test123@abc.com",
    dogId: "30",
    applicationDate: "2024-05-30",
    message: "I would like to apply",
  },
];

const getAllapplication = async (ctx: RouterContext, next: any) => {
  if (application.length) {
    ctx.body = application;
  } else {
    ctx.body = { error: "No application found" };
  }
  await next();
};

/*
const getByUserId = async (ctx: RouterContext, next: any) => {
  let id = +ctx.params.id;
  if ((id<user.length+1) && (id>0)) {
    ctx.body = user[id-1];
  } else {
    ctx.status = 404;
  }
  await next();
}
*/

const createApplication = async (ctx: RouterContext, next: any) => {
  let c: any = ctx.request.body;
  let username = c.username;
  let email = c.email;
  let dogId = c.dogId;
  let applicationDate = c.applicationDate;
  let message = c.message;

  let newApplication = {
    username: username,
    email: email,
    dogId: dogId,
    applicationDate: applicationDate,
    message: message,
  };
  application.push(newApplication);
  ctx.status = 201;
  ctx.body = newApplication;
  await next();
};

/*
const updateUserById = async (ctx: RouterContext, next: any) => {
  let id = +ctx.params.id;
  let c: any = ctx.request.body;
  let username = c.username;
  let password = c.password;
  let email = c.email;
  let staff = c.staff;
  if ((id < user.length+1) && (id > 0)) {
    user[id-1].username = username;
    user[id-1].password = password;
    user[id-1].email = email;
    user[id-1].staff = staff;
    ctx.status = 200;    
    ctx.body = user;
  } else {
    ctx.status = 404;
    }
  await next();
  };
*/

const deleteApplication = async (ctx: RouterContext, next: any) => {
  let id = +ctx.params.id;
  if (id < application.length + 1 && id > 0) {
    application.splice(id - 1, 1);
    ctx.status = 200;
    ctx.body = application;
  } else {
    ctx.status = 404;
  }
  await next();
};

router.get("/", getAllapplication);
router.post("/", bodyParser(), createApplication, validateApplication);
//router.put('/:id', bodyParser(), updateApplication);
router.del("/:id", deleteApplication);

export { router };
