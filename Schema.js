import mongoose from 'mongoose'

// Define the blog schema
const blogSchema = new mongoose.Schema({
  blogName: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Create and export the blog model based on the schema
const Blog = mongoose.model('blog', blogSchema);
export default Blog
