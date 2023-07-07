import Blog from "./Schema.js";
import { body, validationResult } from "express-validator";

const controller = {
  addBlog: async (req, res, next) => {
    try {
      const blog = {
        blogName: "Alosh",
        category: "travel",
        content: "Hello Node Developer",
      };

      const newBlog = await Blog.create(blog);
      res.status(201).json(newBlog);
    } catch (error) {
      const statusCode = error.statusCode || 500;
      res.status(statusCode).json({ error: error.message });
    }
  },
  getBlog: async (req, res, next) => {
    const {id} = req.params;

    const data = await Blog.findById(id);
    if (!data) {
      res.status(404).json({ error: "Blog not found" });
    } else {
      res.status(200).json(data);
    }
  },
  getAllblogs: async (req, res, next) => {
    const allBlogs = await Blog.find();
    console.log(allBlogs,'po')

    res.status(200).json(allBlogs);
  },
  updateBlog: async (req, res, next) => {
    const {id} = req.params;
    const updateBody = {
      blogName: "BINOY",
      category: "TECH",
      content: "Hello Node Developer",
    };
    const updatedBlog = await Blog.findByIdAndUpdate(id, updateBody, {
      new: true,
    });
    if (!updatedBlog) {
      res.status(404).json({ error: "Blog not found" });
    } else {
      res.status(200).json(updatedBlog);
    }
  },
  deleteBlog: async (req, res, next) => {
    const {id} = req.params;
    await Blog.deleteOne({ _id: id });
    res.status(200).json({ message: "Blog deleted successfully" });
  },
};

export default controller;
