import { Request, Response } from 'express';

import { cart } from '../data/cart';
import { horseProduct } from '../data/horseProduct';
import { riderProduct } from '../data/riderProduct';

export const createCart = async (req: Request, res: Response) => {
  try {
    const itemId = req.body.id;

    res.status(200).json('here you can add to cart');
  } catch (err) {
    res.status(404).json({ message: 'Cannot add to cart' });
  }
};
