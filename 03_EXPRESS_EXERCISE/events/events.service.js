import eventsRepository from "./events.repository.js";

const EventsService = {
  getAll:   () => {
    const events =   eventsRepository.findAll();
    return events;
  },

  getById: (id) => {
    const event = eventsRepository.find(id);
    return event;
  },
  create: (eventData) => {
    const createdEvent = eventsRepository.create(eventData);
    return createdEvent;
  },
  update: (id, eventData) => {
    const updatedEvent = eventsRepository.update(id, eventData);
    return updatedEvent;
  },
  delete: (id) => {
    const deletedEvent = eventsRepository.delete(id);
    return deletedEvent;
  }
}

export default EventsService;
