  import express from 'express';
import dotenv from 'dotenv';
import moviesRouter from './api/movies';
import './db';
import './seedData'
import usersRouter from './api/users';
import session from 'express-session';


dotenv.config();
const errHandler = (err, req, res, next) => {
    /* if the error in development then send stack trace to display whole error,
    if it's in production then just send error message  */
    if(process.env.NODE_ENV === 'production') {
      return res.status(500).send(`Something went wrong!`);
    }
    res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
  };
const app = express();

const port = process.env.PORT;
app.use(express.json());
//Users router
app.use('/api/users', usersRouter);
app.use('/api/movies', moviesRouter);
app.use(session({
    secret: 'ilikecake',
    resave: true,
    saveUninitialized: true
  }));

app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});