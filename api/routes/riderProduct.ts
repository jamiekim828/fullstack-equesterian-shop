import { Router } from 'express';
import {
  getRiderProducts,
  getRiderProductById,
} from '../controllers/riderProduct';

const router = Router();

router.get('/', getRiderProducts);
router.get('/:id', getRiderProductById);

export default router;
