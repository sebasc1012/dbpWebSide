import { createToken } from "../utils/token.js";
import { createUser, getAllUsers, getUser } from "./user.service.js";
import bcrypt from "bcrypt";

export const getUsersController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(201).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUser(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createUserController = async (req, res) => {
  try {
    const { name, lastName, email, password, description } = req.body;

    const hash = await bcrypt.hash(password, 12);
    if (!name || !lastName || !email || !password) {
      return res.status(400).json({
        message: "fields are required",
      });
    }
    const create = await createUser(
      name,
      lastName,
      email,
      hash,
      description || null
    );
    const jwt = createToken(create.user_id);
    res.status(201).json({ token: jwt });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        message: "Email already exists",
      });
    }
    res.status(500).json({ message: err.message });
  }
};

export async function userLoginController(req, res) {
  try {
    const { password, email } = req.params;

    const user = await loginUser(email, password);
    if (user.length <= 0) {
      return res.status(401).json({ message: "user not exist" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "incorrect email or password" });
    }
    const jwt = createToken(user.user_id);

    return res.status(201).json({ token: jwt });
  } catch (error) {
    res.status(500).json({ message: "Somethong went wrong", error });
  }
}
