import Blog from "./Schema.js"
import { body, validationResult } from 'express-validator'

const controller = {
    addBlog: async (req, res, next) => {
      try {
        const blog = {
          blogName: 'Alosh',
          category: 'travel',
          content: 'Hello Node Developer'
        };
  
        const newBlog = await Blog.create(blog);
        res.status(201).json(newBlog);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  };
  
  export default controller;
  