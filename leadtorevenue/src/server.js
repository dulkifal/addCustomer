import { Express } from 'express';

let app = Express();
app.get('/api/add/', (req, res) => {
  console.log(req.body);
  res.send('hello');
}
);

app.post('/api/add/', (req, res) => {
  console.log(req.body);
  res.send('hello');
}
);