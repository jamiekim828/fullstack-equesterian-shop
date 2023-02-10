import { Request, Response } from 'express';
import { uuid } from 'uuidv4';

import { userList } from '../data/user';

// get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    res.status(200).json(userList);
  } catch (err) {
    res.status(404).json({ message: 'Users not found' });
  }
};

// get user by id
export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userIndex = userList.findIndex((user) => user.id === id);
    if (!userIndex) {
      res.status(400).json({ message: 'User not found' });
    }
    const user = userList[userIndex];
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: 'User not found' });
  }
};

// create user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({ message: 'Information insufficient' });
    }
    const unavailable = userList.findIndex(
      (user) => user.email === req.body.email
    );
    if (unavailable !== -1) {
      res.status(400).json({ message: 'User exist already' });
    }
    const newUser = { ...req.body, id: uuid() };
    userList.push(newUser);
    res.status(200).json(userList);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// edit user
export const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const index = userList.findIndex((user) => user.id === id);

    if (index !== -1) {
      userList[index] = {
        id: uuid(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: userList[index].password,
      };
      res.status(200).json(userList);
    } else {
      res.status(404).json({ message: 'Update failed' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const index = userList.findIndex((user) => user.id === id);
    if (index === -1) {
      res.status(404).json({ message: 'User cannot be deleted' });
    }
    const userArray = userList.filter((user) => user.id === id);
    res.status(200).json(userArray);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
