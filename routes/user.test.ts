import {describe, expect, test} from '@jest/globals';
import Koa from "koa";
import json from "koa-json";
import passport from 'koa-passport';
import { router } from '../routes/user';
import request from 'supertest';

const app: Koa = new Koa();

app.use(json());
app.use(passport.initialize());
app.use(router.middleware());

describe('Get / - a simple api endpoint', ()=> {
 test('Get all user', async ()=>{
 const result = await
request(app.callback()).get('/api/v1/user');
 expect(result.statusCode).toEqual(200);
 })
})


