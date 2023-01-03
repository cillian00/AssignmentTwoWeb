import moviesRouter from '/api/movies';
import usersRouter from '/api/users';


const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use('/api/users', usersRouter);
app.use('/api/movies', moviesRouter);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});