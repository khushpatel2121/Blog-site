import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true,
    },
},
{timestamps:true})
;

export default mongoose.model("category", CategorySchema);