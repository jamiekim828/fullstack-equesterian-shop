import { Request, Response } from 'express';
import { riderProduct } from '../data/riderProduct';

// get all products
export const getRiderProducts = async (req: Request, res: Response) => {
  try {
    res.status(200).json(riderProduct);
  } catch (err) {
    res.status(404).json({ message: 'Products not found' });
  }
};

export const getRiderProductById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const index = riderProduct.findIndex((prod) => prod.id === id);
    if (index === -1) {
      res.status(400).json({ message: 'Cannot find the product' });
    }
    const item = riderProduct[index];
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ message: 'Product cannot be found' });
  }
};
