import Datastore from "nedb-promises";
import {validateUser} from '../controllers/validation';

// Create a new database instance for the 'user' table
const userDB = Datastore.create({ filename: "./user.db", autoload: true });

//userDB.ensureIndex({ fieldName: "id", unique: true });
// Initialize the 'user' table
const initializeUserTable = async () => {
  const sampleData = [
  {
    username: 'staff123',
    password: '123456',
    email: 'staff123@example.com',
    staff: 'T'
  },
  {
    username: 'user123',
    password: '123456',
    email: 'user123@example.com',
    staff: 'F'
  }
];

  /*
  try {
    await userDB.insert(sampleData);
    console.log('User table initialized with sample data');
  } catch (err) {
    console.error('Error initializing user table:', err);
  }
*/

};

initializeUserTable();

//await userDB.remove({}, { multi: true });

// Initialize the 'cats' table
//initializeCatsTable();

export const run_query = async <T = any>(
  collectionName: string,
  filter: object = {},
  options: object = {},
): Promise<T[]> => {
  try {
    const results = await userDB.find<T>(filter, options);
    return results;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
};

export const run_insert = async <T = any>(
  collectionName: string,
  document: T,
): Promise<any> => {
  try {
    const result = await userDB.insert(document);
    return result;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
};

export const run_update = async <T = any>(
  collectionName: string,
  filter: object = {},
  update: object,
): Promise<number> => {
  try {
    const options = { multi: true };
    const result = await userDB.update(filter, update, options);
    return result;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
};

export const run_delete = async <T = any>(
  collectionName: string,
  filter: object = {},
): Promise<number> => {
  try {
    const options = { multi: true };
    const result = await userDB.remove(filter, options);
    return result;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
};
