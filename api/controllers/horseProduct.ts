import { Request, Response } from 'express';
import { horseProduct } from '../data/horseProduct';

// get all products
export const getHorseProducts = async (req: Request, res: Response) => {
  try {
    res.status(200).json(horseProduct);
  } catch (err) {
    res.status(404).json({ message: 'Products not found' });
  }
};

export const getHorseProductById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const index = horseProduct.findIndex((prod) => prod.id === id);
    if (index === -1) {
      res.status(400).json({ message: 'Cannot find the product' });
    }
    const item = horseProduct[index];
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ message: 'Product cannot be found' });
  }
};
