import eventsRepository from "./events.repository.js";

const EventsService = {
  getAll: () => {
    const events = eventsRepository.findAll();
    return events;
  },

  getById: (id) => {
    const paramId = parseInt(id);
    const event = eventsRepository.find(paramId);
    return event;
  },
  create: (eventData) => {
    const createdEvent = eventsRepository.create(eventData);
    return createdEvent;
  },
  update: (id, eventData) => {
    const paramId = parseInt(id);
    const updatedEvent = eventsRepository.update(paramId, eventData);
    return updatedEvent;
  },
  delete: (id) => {
    const paramId = parseInt(id);
    const deletedEvent = eventsRepository.delete(paramId);
    return deletedEvent;
  }
}

export default EventsService;
