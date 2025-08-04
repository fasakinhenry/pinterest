import express from 'express';

const app = express();

app.use('/test', (req, res) => {
  return res.json('Hello from backend API');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
