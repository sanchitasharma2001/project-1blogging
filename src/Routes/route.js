const express = require('express');
const authorController = require('../controller/authorController')
const blogsController = require('../controller/blogsController')
const middleware = require('../globalMiddleware/middleware')
const router= express.Router();



router.post("/authors",authorController.createAuthor)
router.post("/blogs",blogsController.createBlog)
router.get("/getblog",blogsController.getBlogs)
router.put("/updatedblog/:blogId",blogsController.updateBlog)
router.delete("/deleteblog/:blogId",blogsController.deleteBlog)
router.delete("/deletebyQuery",blogsController.deletebyQuery)
router.post("/login",blogsController.loginAuthor)
module.exports =router






