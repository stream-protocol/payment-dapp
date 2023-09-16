import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('StreamPayment app backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
