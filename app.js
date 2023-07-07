import express from 'express'
import connection from './connection.js';
import logger from'morgan'
const app =express()
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connection()


