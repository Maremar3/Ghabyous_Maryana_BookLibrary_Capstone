import express from 'express';
import dotenv from 'dotenv';
import bookRouter from './routes/book.mjs';


import db from './db/conn.mjs';
dotenv.config();
const router = express();
const PORT = process.env.PORT || 3000;

//Middleware
router.use(express.json());
//MAIN ROUTES
// router.get('/',(req,res)=>{
//     res.send("WE ARE AN BOOK");
//   })
//   router.use('/book', bookRouter);
//   router.use((err, _req, res, next) => {
//    res.status(500).send('Seems like we messed up somewhere...');
//     });
    
//MAIN ROUTES
//In browser the URL will be http://localhost:3000/ because we didn't do .get('/book',async(req,res))
 

router.get('/',async(req,res)=>{
    // let book=[];
    let collection = await db.collection('book');
    let result = await collection.find({}).limit(10).toArray();
  // let resultt= db.collection('book').sort({auther:1})
    //result=result.sort({auther:1})
    res.json(result);
  
  })
router.use('/', bookRouter);
  router.use((err, _req, res, next) => {
   res.status(500).send('Seems like we messed up somewhere...');
    });
    
    router.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
    });