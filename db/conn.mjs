import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
//connect to MongoDB URI Key in .env file
//we will put our .env file in .gitignore to ignore push it to GitHub
const connectionString = process.env.MONGO_URI || '';
const client = new MongoClient(connectionString);
let conn;
try {
conn = await client.connect();
} catch (e) {
 console.error(e);
}
//connect to my library collection
let db = conn.db('library');
export default db;



