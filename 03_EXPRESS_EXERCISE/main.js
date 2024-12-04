import express from 'express';
import apiRouter from './router.js'
import { connectToDatabase } from './database.js';

const app = express();
app.use(express.json());

const port = 3000;

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

connectToDatabase();