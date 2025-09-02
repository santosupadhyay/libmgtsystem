const express = require("express");

const { dbConnection } = require("./config/connection");
const authRoutes = require('./routes/authRoutes')
const bookRoutes = require('./routes/bookRoutes')

require("dotenv").config();

const port = process.env.PORT;

const app = express();
app.use(express.json());

dbConnection(process.env.MONGO_URI)
  .then(() => console.log(`mongodb connection successful !!`))
  .catch((error) => console.error(error));

app.use('/api/auth', authRoutes)
app.use('/api/books', bookRoutes)

app.use("/", (request, response) => {
  response.send("Hello backend");
});

app.listen(port, () => {
  console.log(`server is running at port : ${port}`);
});
