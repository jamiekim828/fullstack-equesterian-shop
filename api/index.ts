// create a server
import Express from 'express';
import cors from 'cors';

import userRouter from './routes/user';
import horseRouter from './routes/horseProduct';
import riderRouter from './routes/riderProduct';

const app = Express();
app.use(Express.json());
app.use(cors());

// routes
app.use('/user', userRouter);
app.use('/horse', horseRouter);
app.use('/rider', riderRouter);

// port adress
const port = 8000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
