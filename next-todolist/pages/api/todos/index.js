import connectToDB from "@/configs/db";
import { verifyToken } from "@/utils/auth";
import UserModel from "@/models/User";
import TodoModel from "@/models/Todo";

const handler = async (req, res) => {
  if (req.method === "GET") {
    // Codes -> Get all todos
  } else if (req.method === "POST") {
    connectToDB();

    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "You are not login !!" });
    }

    const tokenPayload = verifyToken(token);

    if (!tokenPayload) {
      return res.status(401).json({ message: "You are not login !!" });
    }

    const user = await UserModel.findOne({
      email: tokenPayload.email,
    });

    const { title, isCompleted } = req.body;

    const newTodo = {
      title,
      isCompleted,
      user: user._id,
    };

    await TodoModel.create(newTodo);

    return res.status(201).json({ message: "Todo Created Successfully :))" });
  } else {
    return false;
  }
};

export default handler;
