import events from '../events.js';

const EventsService = {
  getAll: () => {
    return events;
  },

  getById: (id) => {
    const paramId = parseInt(id);
    const event = events.find(obj => obj.id === paramId);
    return event;
  },
  create: (eventData) => {
    const newEvent = {
      id: events.length + 1,
      name: eventData.name,
      description: eventData.description,
      start_at: eventData.start_at,
      ends_at: eventData.ends_at,
      address: eventData.address,
      booking_open: eventData.true,
      image: eventData.image,
    };
    events.push(newEvent);
    return newEvent;
  },
  update: (id, eventData) => {
    const paramId = parseInt(id);
    const eventIndex = events.findIndex(obj => obj.id === paramId);

    events[eventIndex] = {
      ...events[eventIndex],
      ...eventData
    }
    return events[eventIndex];
  },
  delete: (id) => {

    const paramId = parseInt(id);
    const eventIndex = events.findIndex(obj => obj.id === paramId);
    if (eventIndex === -1) {
      return false;
    }
    events.splice(eventIndex, 1);
    return true;
  }
}

export default EventsService;
