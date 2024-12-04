import events from './events.database.js';
import EventsService from './events.service.js';

export const EventsController = {
  index: async (req, res) =>  {
     res.json(await EventsService.getAll())
  },
  show: async (req, res) => {
    const event = await EventsService.getById(req.params.id);
    res.json(event);
  },
  create: (req, res) => {
    const newEvent = EventsService.create(req.body);
    res.json(newEvent);
  },
  update: async (req, res) => {
    const updatedEvent =  await EventsService.update(req.params.id, req.body);
    res.json(updatedEvent);
  },
  delete: async (req, res) => {
    const deletedEvent = await EventsService.delete(req.params.id);

    if (!deletedEvent) {
      res.status(404).send();
    }
    res.status(204).send();
  },
  isOpen: (req, res) => {
    const filtered_array = events.filter(obj => obj.booking_open === true);
    res.send(filtered_array);
  }
}