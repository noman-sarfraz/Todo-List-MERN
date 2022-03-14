const express = require('express')
const app = express()
const cors = require('cors')
const todos = require('./routes/todos');

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/todos', todos);

const port = 5000;

app.listen(port, console.log(`Server is listening on port ${port}...`))