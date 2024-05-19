import { Sequelize, QueryTypes } from 'sequelize';
import { createConnection, Connection, RowDataPacket , ResultSetHeader} from 'mysql2/promise';
//import {config} from '../config';

import * as mysql from 'mysql';

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ds'
}
export const run_query = async (query: string, values: any) => {
  try {
    const connection = await createConnection(config);
    const [rows] = await connection.execute<RowDataPacket[]>(query, values);
    await connection.end();
    return rows;
  } catch (err: any) {
    console.error(err, query, values);
    throw 'Database query error';
  }
};

export const run_insert = async (sql: string, values: any) => {
  try {
    const connection = await createConnection(config);
    const [result] = await connection.execute<ResultSetHeader>(sql, values);
    await connection.end();
    return result.insertId; // Return the ID of the inserted row
  } catch (err: any) {
    console.error(err, sql, values);
    throw 'Database query error';
  }
};

export const run_update = async (sql: string, values: any) => {
  try {
    const connection = await createConnection(config);
    const [result] = await connection.execute<ResultSetHeader>(sql, values);
    await connection.end();
    return result.affectedRows; // Return the number of affected rows
  } catch (err: any) {
    console.error(err, sql, values);
    throw 'Database query error';
  }
};

export const run_delete = async (sql: string, values: any) => {
  try {
    const connection = await createConnection(config);
    const [result] = await connection.execute<ResultSetHeader>(sql, values);
    await connection.end();
    return result.affectedRows; // Return the number of affected rows
  } catch (err: any) {
    console.error(err, sql, values);
    throw 'Database query error';
  }
};