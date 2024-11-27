import events from '../events.js';

export const EventsController = {
  index: (req, res) => res.json(events),
  show: (req, res) => {
    const param_id = parseInt(req.params.id);
    const object_search = events.findIndex(obj => obj.id === param_id);
    const object_response = events[object_search];
    res.json(object_response);
  },
  create: (req, res) => {
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
  },
  update: (req, res) => {
    const param_id = parseInt(req.params.id);

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
  },
  delete: (req, res) => {
    const param_id = parseInt(req.params.id);
    const object_search = events.findIndex(obj => obj.id === param_id);
    const object_response = events[object_search];
    events.splice(object_search, 1);
    res.send(object_response);
  },
  isOpen: (req, res) => {
    const filtered_array = events.filter(obj => obj.booking_open === true);
    res.send(filtered_array);
  }
}