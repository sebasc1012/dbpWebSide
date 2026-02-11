import { createUser, getAllUsers } from "./user.service.js";

export const getUsersController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createUserController = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const create = await createUser(email, name, age);
    res.status(201).json(create);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
