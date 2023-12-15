
const express = require('express')
const cors = require('cors')
const app = express()
const port = 7000
const mongoose = require('mongoose');
const {Schema} = mongoose;
const dotenv = require('dotenv')
const booksRoute= require ("./Routes/booksRoute.js" )

dotenv.config()
app.use(cors())
app.use(express.json());
app.use("/books" , booksRoute)

// const UserSchema = new Schema({
//     title: String,
//     description:String,
//     category: [{type:String}],
//     image: String
// }, { timestamps: true });

// const Users = mongoose.model('Users', UserSchema);


// ------------------------------Get

// app.get('/books/',async (req, res) => {
// const data=await Users.find({})
//  res.send(data)
// })

// // ------------------------------GetById

// app.get('/books/:id',async (req, res) => {
//     const {id}=req.params
//     try {
//         const data=await Users.findById(id).exec()
//         res.send(data)
//     } catch (error) {
//         res.status(500).send("This is Error");
//     }
// })

// // ------------------------------Delete

// app.delete('/books/:id',async (req, res) => {
//     const {id}=req.params
//     try {
//         const data=await Users.findByIdAndDelete(id).exec()
//         res.send(data)
//     } catch (error) {
//         res.status(500).send("This is Error");
//     }
// })

// // ------------------------------Post

// app.post('/books/',async (req, res) => {
//     try {
//         const data= new Users({...req.body})
//         await data.save()
//         res.status(200).send("This is Creat");
//     } catch (error) {
//         res.status(500).send("This is Error");
//     }
// })

// // ------------------------------Update

// app.put('/books/:id',async (req, res) => {
//     const {id}=req.params
//     try {
//         const data=await Users.findByIdAndUpdate(id, req.body).exec()
//         res.send(data)
//     } catch (error) {
//         res.status(500).send("This is Error");
//     }
// })
mongoose.connect('mongodb+srv://AliIsmayil:ali123@cluster0.tzldidp.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})