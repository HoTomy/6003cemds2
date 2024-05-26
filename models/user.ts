import * as userDB from '../helpers/userdb';

/*
export const getById = async (id) => {
  try {
    const data = await userDB.run_query('user', { ID: id });
    return data;
  } catch (err) {
    console.error('Error executing query:', err);
    throw err;
  }
};
*/


export const getAll = async () => {
  try {
    const data = await userDB.run_query('user');
    return data;
  } catch (err) {
    console.error('Error executing query:', err);
    throw err;
  }
};