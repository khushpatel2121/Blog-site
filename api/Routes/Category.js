import express from "express";
import category from "../Models/Category.js";

const router = express.Router();

router.post("/", async(req,res)=>{
    const newCat = new category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get("/", async(req,res)=>{
    try{
       const cats = await category.find();
       res.status(200).json(cats);
    }catch(err){
      res.status(500).json(err);
    }
});

export default router
