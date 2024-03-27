import express from 'express';
import db from '../db/conn.mjs';
import { ObjectId } from 'mongodb';
const router = express.Router();
let collection = await db.collection("book");

//get all routes
//In browser the URL will be http://localhost:3000/ because we didn't do .get('/book',async(req,res))
router.get('/', async (req, res) => {
  let collection = await db.collection('book');
  let result = (await collection.find({}).limit(20).toArray());
  res.json(result);
})

//Get using query commands(Book ID) to retrieve one document  from the database 
router.get('/:id', async (req, res) => {
  let collection = await db.collection('book');
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);
  if (!result) res.status(404).send('Not found');
  else res.send(result).status(200);
});

//Create POST BOOK, create new documnet of book
router.post('/', async (req, res) => {
  let collection = await db.collection('book');
  let newDocument = req.body;
  let result = await collection.insertOne(newDocument);
  if (!result) res.status(404).send('Not found');
  else
    res.json(result).status(201);
});

//PATCH to update any field value , but you have to execute  (get)BOOK by ID first
router.put('/:id', async (req, res) => {
  const updates = req.body
  if (ObjectId.isValid(req.params.id)) {
    db.collection('book')
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => { res.status(500).json({ error: 'DID NOT UPDATE' }) })
  }
  else { res.status(500).json({ error: 'NOT A VALID DOC ID' }) }
})

//DELETE to delete any document , but you have to execute  (get)BOOK by ID
router.delete('/:id', async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection('book')
    //will look  for book it's ID equel ID from thunderclient as parameter/:id 
    //for example Delete :http://localhost:3000/book/:BOOKID
      .deleteOne({ _id: new ObjectId(req.params.id) })
      .then(result => {
        res.status(200).json(result)
      })
      //If it didnot find the book will send error message and 500 status
      .catch(err => {
        res.status(500).json({ error: 'DID NOT DELETE' })
      })
  } else {
    res.status(500).json({ error: 'NOT A VALID DOC ID' })
  }
  ;
});
export default router;
