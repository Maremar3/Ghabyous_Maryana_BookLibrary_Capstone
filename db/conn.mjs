import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
const connectionString = process.env.MONGO_URI || '';

const client = new MongoClient(connectionString);
let conn;
try {
conn = await client.connect();
} catch (e) {
 console.error(e);
}

let db = conn.db('library');
export default db;






// import { MongoClient } from 'mongodb';

// import dotenv from 'dotenv';
// const mongodb =require("mongodb")
// dotenv.config();

// const connectionString="mongodb+srv://maremar3:az1hzckI0H3tQSU2@cluster0.iywvm1d.mongodb.net/"
// const dbName= "libraray"
// const MongoClient=mongodb.MongoClient;
// //const client = new MongoClient(connectionString);
// //let conn;
// let db =null;

// try {
// conn = await client.connect();
// } catch (e) {
//  console.error(e);
// }

// //let db =  conn.db('library');

// export default db;





