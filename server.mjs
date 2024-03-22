import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import book from './routes/bookSchema.mjs'
dotenv.config();
const app = express();
console.log(process.env.PORT)
const PORT = process.env.PORT || 3000;
await mongoose.connect(process.env.MONGO_URI)
//middleware
app.use(express.json())
//create
app.post('/',async(req,res)=>{
  try{
    let newBook = new book(req.body)
    await book.save(newBook)

  }catch(err){
   res.status(500).json({msg: "server error"})
 }
res.send('create route')
})

//read
app.get('/', async (req, res) => {
  try {
    const allBook = await book.find({});
    res.json(allBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});
//Update
app.put('/:id', async (req, res) => {
  try {
    const updatedBook = await book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});
//Delete
app.delete('/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: 'Item Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});
//error catching middleware
app.use((err, _req,res,next)=>{
  res.status(500).send("seems like we missing somewhere...")
})
//listen
app.listen(PORT,()=>{
  console.log(`server is listening on port : ${PORT}`)
})

    

 