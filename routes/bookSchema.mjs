
import mongoose from 'mongoose';
import dotenv from 'dotenv'


// import db from '../db/conn.mjs';
//bookSchema
const bookSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  auther:{
    type: String,
    require: true
  },
  description:{
    type: String,
    require: true
  },
  price:{
    type: Number,
    require: true
  },
  image:{
    type: String,
    require: true
  }


})
export default mongoose.model('book',bookSchema)
