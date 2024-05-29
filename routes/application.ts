import Router, {RouterContext} from "koa-router";
import bodyParser from "koa-bodyparser";
//import * as model from '../models/user';


const router = new Router({prefix: '/api/v1/application'});

const application = [
  {username:"staff123", email:"staff123@example.com", fullText:"I would like to apply"},
  
];

const getAllapplication = async (ctx: RouterContext, next: any)=> {
  if (application.length) {
    ctx.body = application;
  } else {
    ctx.body = {"error": "No application found"}
  }
   await next();
}


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


const registerUser = async (ctx: RouterContext, next: any) => {
  let c: any = ctx.request.body;
  let username = c.username;
  let password = c.password;
  let email = c.email;
  let staff = c.staff;
  let newUser = {username: username, password: password, email:email, staff:staff}
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

const deleteUserById = async (ctx: RouterContext, next: any) => {
  let id = +ctx.params.id;
  if((id < user.length+1) && (id > 0)) {
    user.splice(id-1, 1);
    ctx.status = 200;
    ctx.body = user;
  } else {
    ctx.status = 404;
  }
  await next();
}
*/
router.get('/', getAllapplication);
//router.get('/:id', getByUserId);
//router.post('/', bodyParser(), registerUser);
//router.put('/:id', bodyParser(), updateUserById);
//router.del('/:id', deleteUserById);

export { router };
