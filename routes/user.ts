import Router, { RouterContext } from "koa-router";
import bodyParser from "koa-bodyparser";
import {validateUser} from '../controllers/validation';


const router = new Router({ prefix: "/api/v1/user" });

const user = [
  {
    username: "staff1357",
    password: "13572468",
    email: "staff1357@gmail.com",
    staff: "T",
  },
  {
    username: "user2468",
    password: "24681357",
    email: "user2468@gmail.com",
    staff: "F",
  },
  {
    username: "staff111",
    password: "111111",
    email: "staff111@gmail.com",
    staff: "T",
  },
  {
    username: "user222",
    password: "222222",
    email: "user222@gmail.com",
    staff: "F",
  },
  {
    username: "staff333",
    password: "333333",
    email: "staff333@gmail.com",
    staff: "T",
  },
  {
    username: "user444",
    password: "444444",
    email: "user444@gmail.com",
    staff: "F",
  },
];

const basicAuth = async (ctx: RouterContext, next: any) => {
  // Add your authentication logic here
  const { authorization } = ctx.request.headers;

/*  
  const credentials = Buffer.from(authorization.split(" ")[1], "base64").toString().split(":");
  const username = credentials[0];
  const password = credentials[1];
*/
  
  // Check if the provided username and password match
  const foundUser = user.find((user) => user.username === user.username && user.password === user.password);

  if (foundUser) {
    // Authentication successful, proceed to the next middleware or route handler
    await next();
  } else {
    // Authentication failed
    ctx.status = 401;
    ctx.body = "Authentication failed";
  }
};

const getAllUsers = async (ctx: RouterContext, next: any) => {
  if (user.length) {
    ctx.body = user;
  } else {
    ctx.body = { error: "No users found" };
  }
  await next();
};
 
const getByUserId = async (ctx: RouterContext, next: any) => {
  let id = +ctx.params.id;
  if (id < user.length + 1 && id > 0) {
    ctx.body = user[id - 1];
  } else {
    ctx.status = 404;
  }
  await next();
};

const registerUser = async (ctx: RouterContext, next: any) => {
  let c: any = ctx.request.body;
  let username = c.username;
  let password = c.password;
  let email = c.email;
  let staff = c.staff;
  let newUser = {
    username: username,
    password: password,
    email: email,
    staff: staff,
  };
  user.push(newUser);
  ctx.status = 201;
  ctx.body = newUser;
  await next();
};

const updateUserById = async (ctx: RouterContext, next: any) => {
  let id = +ctx.params.id;
  let c: any = ctx.request.body;
  let username = c.username;
  let password = c.password;
  let email = c.email;
  let staff = c.staff;
  if (id < user.length + 1 && id > 0) {
    user[id - 1].username = username;
    user[id - 1].password = password;
    user[id - 1].email = email;
    user[id - 1].staff = staff;
    ctx.status = 200;
    ctx.body = user;
  } else {
    ctx.status = 404;
  }
  await next();
};

/*
const updateUserById = async (ctx: RouterContext, next: () => Promise<any>) => {
  const id = ctx.params.id;
  const context: any = ctx.request.body;
  const index = user.findIndex(u => u._id === id);
  if (index !== -1) {
    user[index] = { ...user[index], ...context };
    ctx.body = user[index];
    ctx.status = 200;
  } else {
    ctx.body = {};
  }
  await next();
};
*/

const deleteUserById = async (ctx: RouterContext, next: any) => {
  let id = +ctx.params.id;
  if (id < user.length + 1 && id > 0) {
    user.splice(id - 1, 1);
    ctx.status = 200;
    ctx.body = user;
  } else {
    ctx.status = Number(id) + 200; // 200 is the HTTP status code for success
    ctx.body = "id:" + id + " deleted success"; // Response message
  }
  await next();
};

router.get("/", basicAuth, getAllUsers);
router.get("/:id", basicAuth, getByUserId);
router.post("/", bodyParser(), basicAuth, registerUser, validateUser);
router.put("/:id", bodyParser(), basicAuth, updateUserById, validateUser);
router.del("/:id", basicAuth, deleteUserById);

export { router };




