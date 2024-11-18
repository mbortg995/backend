import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import events from "./events.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();
app.use(express.json());

const port = 3000;

createEvent(json_request){

}


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
}
);

app.get( '/', (req, res) => {
  console.log('Esto es un get');
  res.send("Bienvenido a mi API");
}
);

app.get( '/events', (req, res) => {
  res.send(events);
}
);

app.post('/events', (req, res) => {
  createEvent(req); // El request que recibo es un objeto REQUEST. Request.body es por donde tenemos que ir.
  res.send(events);
}
);

app.put('/events', (req, res) => {
  res.send("actualizar un evento");
}
);

app.delete('/events', (req, res) => {
  res.send("borrar un evento");
}
);


app.post('/myName', (req, res) => {
  res.send("My name is " + req.body.name);
}
);

app.get( '/', (req, res) => {
  res.sendFile(path.join(__dirname,'public','index.html'))
}
);