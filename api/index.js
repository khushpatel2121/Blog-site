import express from 'express';
import mongoose from 'mongoose';
import dotnev from 'dotenv';
import authRoute from "./Routes/auth.js"
import userRoute from "./Routes/User.js";
import postRoute from "./Routes/Post.js"
import catRoute from "./Routes/Category.js"
import multer from 'multer';
import cors from "cors"
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
dotnev.config();
 app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));


mongoose.set('strictQuery',false);

const connect = async() => {
   try {
    await mongoose.connect(process.env.MONGO)
   } catch (error) {
    throw(error);
   }
  
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected")
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

app.use("/api/auth" , authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category", catRoute);


app.listen(8800,()=>{
    connect();
    console.log("server started at port 8800")
})