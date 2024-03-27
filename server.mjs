import express from 'express';
import dotenv from 'dotenv';
import bookRouter from './routes/book.mjs';
import cors from 'cors'
import db from './db/conn.mjs';
dotenv.config();
const router = express();
const PORT = process.env.PORT || 3000;

//Middleware
// router.use(express.json());
router.use(express.json());
router.use(cors())

//MAIN ROUTES
router.get('/', async (req, res) => {
  let collection = await db.collection('book');
  let result = await collection.find({}).limit(10).toArray();
  res.json(result);
})

//Middleware
router.use('/book', bookRouter);
//In browser the URL will be http://localhost:3000/book
router.use((err, _req, res, next) => {
  res.status(500).send('Seems like we messed up somewhere...');
});
router.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});