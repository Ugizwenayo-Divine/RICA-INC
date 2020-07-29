import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import allRoutes from './routes/index';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome' });
});
app.use(allRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    message: 'The requested resource was not found',
  });
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});

export default app;
