import express from 'express';
import userRouter from "./routes/user.route.js"

const app = express();

app.use('/users', userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
