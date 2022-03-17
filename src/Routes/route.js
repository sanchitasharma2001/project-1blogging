const express = require('express');
const authorController = require('../controllers/authorController')
const blogsController = require('../controllers/blogsController')
const middleware = require("../middleware/auth.js")
const router= express.Router();


// router.post("/authors",authorController.createAuthor)
// router.post("/blogs",blogsController.createBlog)
// router.get("/getblogs", blogsController.getBlogs)
// router.put("/updatedblogs/:blogId", blogsController.updateblog)
// router.delete("/Deleteblogs/:blogId", blogsController.deleteBlog)
// router.delete("/deletebyQuery", blogsController.deletebyQuery)

router.post("/login", blogsController.loginUser)
router.post("/authors",authorController.createAuthor)
router.post("/createblogs",middleware.authenticate, blogsController.createBlog)
router.get("/getblogs",middleware.authenticate, blogsController.getBlogs)
router.put("/updateblogs/:blogId/:authorId",middleware.authenticate, middleware.authorise,blogsController.updateblog)
router.delete("/Deleteblogs/:blogId/:authorId",middleware.authenticate,middleware.authorise, blogsController.deleteBlog)
router.delete("/deletebyQuery/:authorId",middleware.authenticate, middleware.authorise,blogsController.deletebyQuery)

module.exports =router