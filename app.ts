import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response
} from 'express';
import cors from 'cors';
import authorRouter from './src/routes/author';
import bookRouter from './src/routes/book';
import bookClientRouter from './src/routes/bookClient';
import clientRouter from './src/routes/client';

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  (err: ErrorRequestHandler, _: Request, res: Response, next: NextFunction) => {
    res.status(400).json({ error: 'Invalid JSON format' });
  }
);

app.get('/', (_, res) => {
  res.status(200).json('Server API alive');
});

app.use('/', authorRouter, bookRouter, bookClientRouter, clientRouter);

export default app;
