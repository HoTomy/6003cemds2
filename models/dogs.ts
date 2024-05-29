import * as dogsDB from '../helpers/database';
import { dog } from '../schema/dog.schema';

export const getById = async (id) => {
  try {
    const data = await dogsDB.run_query('dogs', { ID: id });
    return data;
  } catch (err) {
    console.error('Error executing query:', err);
    throw err;
  }
};

export const getAll = async () => {
  try {
    const data = await dogsDB.run_query('dogs');
    return data;
  } catch (err) {
    console.error('Error executing query:', err);
    throw err;
  }
};

export const add = async (dog) => {
  try {
    const result = await dogsDB.run_insert('dogs', dog);
    return { status: 201, result };
  } catch (err) {
    return { status: 500, error: err };
  }
};

/*
export const add = async (dog) => {
  try {
    const result = await dogsDB.run_insert('dogs', dog);
    return { status: 201 };
  } catch (err) {
    return err;
  }
};
*/

export const updateById = async (dog, id) => {
  try {
    const result = await dogsDB.run_update('dogs', { ID: id }, { $set: dog });
    return { status: 201 };
  } catch (err) {
    return err;
  }
};

/*
export const deleteById = async (id) => {
  try {
    const result = await dogsDB.run_delete('dogs', { ID: id });
    return { status: 201 };
  } catch (err) {
    return err;
  }
};
*/