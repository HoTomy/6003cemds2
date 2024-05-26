import * as dogsDB from '../helpers/database';

export const getAllByFilter = async (filter: any) => {
  const keys = Object.keys(filter);
  const values = Object.values(filter);
  let conditions = [];
  let params = [];

  for (let i = 0; i < keys.length; i++) {
    conditions.push(`${keys[i]} LIKE ?`);
    params.push(`%${values[i]}%`);
  }

  const query = `SELECT * FROM dogs WHERE ${conditions.join(' OR ')} ORDER BY ID`;
  const data = await dogsDB.run_query(query, params);
  return data;
};