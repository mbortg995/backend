import { Router } from "express";
import eventRoutes from "./events/events.router.js";


const router = Router();

router.get( '/', (req, res) => {
  console.log('Esto es un get');
  res.send("Bienvenido a mi API");
});

router.use('/events' , eventRoutes);

export default router;