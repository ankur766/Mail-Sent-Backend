require('dotenv').config();
const  express = require('express');
const  app = express();
const router = require('./Routes/router');
const cors=require('cors');
const  port = 8006;
//middleware

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
