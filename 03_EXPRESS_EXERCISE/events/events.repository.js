import eventModel from './events.model.js';


const eventsRepository = {
  findAll:  () => {
    const eventsList =  eventModel.find().lean();
    return eventsList;
  },
  find: (id) => {
    const eventFind = eventModel.findById(id).lean();
    return eventFind;
  },
  create: async (eventData) => {
    const newEvent = await eventModel.create(eventData);
    return newEvent;
  },

  update: (id, eventData) => {
    const filter = {_id: id};
    const updatedEvent = eventModel.findOneAndUpdate(filter, eventData, {new: true}).lean();
    return updatedEvent;
  },

  delete: (id) => {
    const filter = {_id: id};

    const deletedEvent = eventModel.findOneAndDelete(filter);
    console.log(deletedEvent);

    return deletedEvent !== null;
  }
}

export default eventsRepository;