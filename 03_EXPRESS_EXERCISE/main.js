import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import events from "./events.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();
app.use(express.json()); // IMPPORTANTE. LE DECIMOS A EXPRESS DE MANERA EXPLICITA QUE PODEMOS RECIBIR JSONS.

const port = 3000;

// createEvent(json_request){
// console.log("Prueba");
// };


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

app.post('/events', async (req, res) => {
  const newEvent = {
    id:events.length+1,
    name: req.body.name,
    description: req.body.description,
    start_at: req.body.start_at,
    ends_at: req.body.ends_at,
    address: req.body.address,
    booking_open: req.body.true,
    image: req.body.image,
  };
  events.push(newEvent);

  res.json(newEvent);
}
);

app.put('/events/:id', (req, res) => {
  const object_search = events.find(obj => obj.id === updateEvent.id);
  const updateEvent = {
    id:req.body.id,
    name: req.body.name,
    description: req.body.description,
    start_at: req.body.start_at,
    ends_at: req.body.ends_at,
    address: req.body.address,
    booking_open: req.body.true,
    image: req.body.image,
  }

  res.json(updateEvent);
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