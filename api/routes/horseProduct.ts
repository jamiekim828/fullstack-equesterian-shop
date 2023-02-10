import { Router } from 'express';

import {
  getHorseProducts,
  getHorseProductById,
} from '../controllers/horseProduct';

const router = Router();

router.get('/', getHorseProducts);
router.get('/:id', getHorseProductById);

export default router;
