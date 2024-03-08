const Post = require("../model/ResidencyModel");
const cloudinary = require('cloudinary');
const dotenv = require('dotenv');
dotenv.config();

// setup cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: 382153235691892,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const createPost = async (req, res) => {
    try {
        // converting buffer into 
        console.log(req.file);
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const photoObject = await cloudinary.v2.uploader.upload(dataURI);
console.log(photoObject)
        // create post
        const newPost = await Post.create({
            title: req.body.title, description: req.body.description, price: req.body.price,
            address: req.body.address, city: req.body.city, country: req.body.country, imageUrl: photoObject.url
        });

        return res.status(201).json({
            status: 'success',
            message: "successfully created"
        })
    } catch (error) {
        console.log(error.message);
    }
}

const myPosts = async (req, res) => {
    try {
        const posts = await Post.find({authorId: req.userId});

        return res.json({
            status: 'success',
            posts: posts
        })
    } catch (error) {
        console.log(error.message);
    }
}

const allPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        return res.status(200).json({
            status: "success",
            posts: posts
        })
    } catch (error) {
        return res.status(404).json({
            status: "failed",
            message: error.message
        })
    }
}

module.exports = { createPost,allPosts,myPosts }