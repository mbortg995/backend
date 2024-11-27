import events from '../events.js';
import EventsService from './events.service.js';

export const EventsController = {
  index: (req, res) => res.json(EventsService.getAll()),
  show: (req, res) => {
    const event = EventsService.getById(req.params.id);
    res.json(event);
  },
  create: (req, res) => {
    const newEvent = EventsService.create(req.body);
    res.json(newEvent);
  },
  update: (req, res) => {
    const updatedEvent =  EventsService.update(req.params.id, req.body);
    res.json(updatedEvent);
  },
  delete: (req, res) => {
    const deletedEvent = EventsService.delete(req.params.id);

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