import express from "express";
import Post from "../Models/Post.js";
import User from "../Models/users.js"

const router = express.Router();

//Create Post 
router.post("/", async(req,res)=>{
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err); 
    }
});

//Update Post 
router.put("/:id", async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                const updatePost = await Post.findByIdAndUpdate(
                    req.params.id,{
                        $set:req.body
                    },
                    {new:true}
                )
                res.status(200).json(updatePost);
                
            } catch (err) {
                res.status(500).json(err);
            }
          } else {
          res.status(402).json("you can only update you post")  
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete post 
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          await Post.findByIdAndDelete(req.params.id);
          res.status(200).json("Post has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can delete only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Get post 
router.get("/:id", async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err)  
     }
});

//get posts
router.get("/", async(req,res)=>{
    const username = req.query.user;
    const catName = req.query.cat;
    try {
       let posts;
       if(username){
        posts = await Post.find({username});
       }else if(catName){
        posts = await Post.find({
            categories:{
                $in:[catName],
            },
        });
       }
  else{
      posts = await Post.find();
  }
  res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err)
    }
});

export default router;