import express from 'express';
import cors from 'cors';
import mongoose, {model,Schema} from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors()); // allow every request from anywhere
app.use(express.json()); //if smthng coming n body then recieve it

//connection to MONGODB
const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("MONGODB connected")
}
connectDB();


const PORT = 5000;

//schema
const noteSchema = new Schema({
    title:String,
    content:String,
    category:String
})

const Note = model("Note",noteSchema);


app.get("/health",(req,res)=>{//for checking whether our server is working properly with api or not
    res.json({
        success:true,
        message:"server is running",
        data:null
    })
});

//POST REQUEST
app.post("/notes",async(req,res)=>{
    const {title , content , category} = req.body; //reading title content from request body

  const newNote = await Note.create({
    "title":title,
    "content":content,
    "category":category
  })
   

    res.json({
        success:true,
        message:"note added succefully",
        data: newNote
    })//respond is sending for succesfully adding note
})
// GET REQUEST
app.get("/notes",async (req,res)=>{

    const notes = await Note.find();

    res.json({
        success:true,
        message:"notes fetched succefully",
        data:notes
    })
})

app.get("/notes/:id",async(req,res)=>{
     const {id} = req.params;

     const note = await Note.findOne({
        _id: id
     })
     res.json({
        success:true,
        message:"notes fetched succefully",
        data:note
    })
})
// PUT REQUEST FOR UPDATION
app.put("/notes/:id",async(req,res)=>{
    const {id} = req.params;

    const {title,content,category} = req.body;

    await Note.updateOne({_id: id},{$set:{////match and set query
        title: title,
        content: content,
        category: category
    }}) 
    res.json({
        success:true,
        message:"notes updated successfully",
        data:null
    })
})

//DELETE REQUEST
app.delete("/notes/:id",async(req,res)=>{
    const {id} = req.params;

    await Note.deleteOne({_id: id})

    res.json({
        success:true,
        message:"notes deleted successfully",
        data:null
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});