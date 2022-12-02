import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response
} from 'express';
import cors from 'cors';

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

/* app.get('/book', async (req, res) => {
  const books = await Book.findAll();
  res.send(books);
});

app.get('/author', async (req, res) => {
  const authors = await Author.findAll();
  res.send(authors);
}); */

// app.use('/', productRouter);

export default app;
