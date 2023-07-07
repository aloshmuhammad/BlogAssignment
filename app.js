import express from 'express'
import connection from './connection.js';
import logger from'morgan'
import bodyParser from 'body-parser';
import controller from './Controller.js';

const app =express()
const router=express.Router()
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(logger('dev'));
app.use( router)
app.use(express.json());
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: false }));
connection()



//Routes
router.post('/posts',controller.addBlog)


