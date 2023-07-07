import express from "express";
import connection from "./connection.js";
import logger from "morgan";
import bodyParser from "body-parser";
import controller from "./Controller.js";
import {
  createBlogValidation,
  blogValidationWithid,
  validate,
} from "./Validation.js";

const app = express();
const router = express.Router();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(logger("dev"));
app.use(router);
app.use(express.json());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
connection();

//Routes
router.post("/add-posts", createBlogValidation, validate, controller.addBlog);
router.get("/posts/:id", blogValidationWithid, validate, controller.getBlog);
router.get("/all-posts", controller.getAllblogs);
router.put(
  "/edit-post/:id",
  blogValidationWithid,
  validate,
  controller.updateBlog
);
router.delete(
  "/delete-post/:id",
  blogValidationWithid,
  validate,
  controller.deleteBlog
);
