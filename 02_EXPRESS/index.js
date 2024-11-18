import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Server started on port 3000');
}
);

app.get( '/myName/', (req, res) => {
  console.log('Esto es un get');
  res.send("My name is " + req.query.name);
}
);


app.post("/myName", (req, res) => {
  res.send("My name is " + req.body.name);
}
);

app.get( '/', (req, res) => {
  res.sendFile(path.join(__dirname,'public','index.html'))
}
);