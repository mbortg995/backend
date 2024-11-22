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
});

app.get( '/', (req, res) => {
  console.log('Esto es un get');
  res.send("Bienvenido a mi API");
});

app.get( '/events', (req, res) => {
  res.send(events);
});

// Implementar funcionalidad para poder crear un evento
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
});


// Implementar funcionalidad para poder actualizar un evento
app.put('/events/:id', (req, res) => {

  const param_id = parseInt(req.params.id); // Tengo que parsear el parametro ID pues me viene en string y lo quiero en int.

  const updateEvent = {
    id:req.body.id,
    name: req.body.name,
    description: req.body.description,
    start_at: req.body.start_at,
    ends_at: req.body.ends_at,
    address: req.body.address,
    booking_open: req.body.booking_open,
    image: req.body.image,
    company_id: req.body.company_id,
    max_tickets_for_order: req.body.max_tickets_for_order,
    products: req.body.products,
  }
  const object_search = events.findIndex(obj => obj.id === param_id);

  events[object_search].id=param_id;
  events[object_search].name=updateEvent.name;
  events[object_search].description=updateEvent.description;
  events[object_search].start_at=updateEvent.start_at;
  events[object_search].ends_at=updateEvent.ends_at;
  events[object_search].address=updateEvent.address;
  events[object_search].booking_open=updateEvent.booking_open;
  events[object_search].image=updateEvent.image;
  events[object_search].company_id=updateEvent.company_id;
  events[object_search].max_tickets_for_order=updateEvent.max_tickets_for_order;
  events[object_search].products=updateEvent.products;

  res.json(events[object_search]);
});


// Implementar funcionalidad para poder eliminar un evento
app.delete('/events/:id', (req, res) => {
  const param_id = parseInt(req.params.id);
  const object_search = events.findIndex(obj => obj.id === param_id);

  const object_response = events[object_search];

  events.splice(object_search, 1);

  res.send(object_response);
});


// Crear filtro por que tenga la venta de entradas abierta
app.get( '/events/open', (req, res) => {
  const filtered_array = events.filter(obj => obj.booking_open === true);
  res.send(filtered_array);
});

// Crear filtro que muestre los eventos que empiecen después de una fecha específica
// Expected input:
// {
//   "start_at": "2025-06-21T00:00:00.000000Z"
// }

// No gastar otro endpoint. Gastar query param desde /events.
app.get( '/events/date_greater_than/', (req, res) => {
  const filter_date = req.body.start_at;
  const filtered_array = events.filter(obj => obj.start_at >= filter_date);
  res.send(filtered_array);
});

// Crear una ruta (endpoint) que tenga un parámetro con el id del evento y me devuelve solo el evento que se ha consultado
app.get( '/events/:id', (req, res) => {
  const param_id = parseInt(req.params.id);
  const object_search = events.findIndex(obj => obj.id === param_id);
  const object_response = events[object_search];
  res.send(object_response);
});

app.get( '/', (req, res) => {
  res.sendFile(path.join(__dirname,'public','index.html'))
});