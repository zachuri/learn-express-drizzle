import express from 'express';

const app = express();
const port = process.env.PORT || '3000';

app.get('/', (req, res) => {
  res.send('Hello World');
});


app.listen(port, (err: NodeJS.ErrnoException | null) => {
  if (err) return console.error(err);

  return console.log(`Server is listening on ${port}`);
});
