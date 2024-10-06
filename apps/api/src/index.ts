import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;


// Use the cors middleware
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the API');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});