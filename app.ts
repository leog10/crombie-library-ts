import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response
} from 'express';
import cors from 'cors';
import Book from './models/book';
import Author from './models/author';
import Client from './models/client';
import BookClient from './models/bookClient';

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

app.get('/book', async (req, res) => {
  const books = await Book.findAll();
  res.send(books);
});

app.get('/author', async (req, res) => {
  const authors = await Author.findAll();
  res.send(authors);
});

app.post('/author', async (req, res) => {
  const author = req.body;
  const result = await Author.create(author);

  res.send(result);
});

app.post('/book', async (req, res) => {
  const book = req.body;
  const result = await Book.create(book);

  res.send(result);
});

app.post('/client', async (req, res) => {
  const client = req.body;
  const result = await Client.create(client);

  res.send(result);
});

app.post('/rent', async (req, res) => {
  const { client_id, book_id } = req.body;

  const result = await BookClient.create({ client_id, book_id });

  res.send(result);
});

// app.use('/', productRouter);

export default app;
