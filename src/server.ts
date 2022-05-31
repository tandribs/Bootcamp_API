import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

//  {
//  id: 1,
// name: 'NodeJS',
//  created_at: '2022-05-25 00:00:00',
//  updated_at: '2022-05-25 00:00:00',
//},
//{
//  id: 2,
//  name: 'MySQL',
//  created_at: '2022-05-25 00:00:00',
//  updated_at: '2022-05-25 00:00:00',
//},

const categories: any = [];

app.get('/', (request: Request, response: Response) => {
  return response.json({ status: 'success', version: '1.0.0' }).status(200);
});

//GET ALL CATEGORIES
app.get('/categories', (request: Request, response: Response) => {
  return response.json(categories).status(200);
});

app.post('/categories', (request: Request, response: Response) => {
  const data = request.body;
  console.log(data);
  categories.push(data);
  return response.json().status(200);
});

app.listen(3000, () => {
  console.log('Server is running');
});