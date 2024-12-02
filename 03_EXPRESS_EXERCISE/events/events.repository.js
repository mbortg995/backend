import events from './events.database.js';
import eventModel from './events.model.js';


const eventsRepository = {
  findAll: () => {
    return events;
  },
  find: (id) => {
    const event = events.find(obj => obj.id === id);
    return event;
  },
  create: async (eventData) => {
    const newEvent = await eventModel.create(eventData);
    return newEvent;
  },

  update: (id, eventData) => {
    const eventIndex = events.findIndex(obj => obj.id === id);

    events[eventIndex] = {
      ...events[eventIndex],
      ...eventData
    }
    return events[eventIndex];
  },

  delete: (id) => {
    const eventIndex = events.findIndex(obj => obj.id === id);
    if (eventIndex === -1) {
      return false;
    }
    events.splice(eventIndex, 1);
    return true;
  }
}

export default eventsRepository;