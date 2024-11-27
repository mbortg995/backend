
import { Router } from 'express';
import { EventsController } from './events.controller.js';

const router = Router();

router.get( '/', EventsController.index);

router.post('/',EventsController.create);

router.put('/:id', EventsController.update);

router.delete('/:id', EventsController.delete);

router.get( '/open', EventsController.isOpen);

router.get( '/:id', EventsController.show);

export default router;