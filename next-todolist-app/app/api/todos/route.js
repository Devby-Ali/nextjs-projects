import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { verifyToken } from "@/utils/auth";

export async function POST(req) {
  try {
    connectToDB();

    const token = cookies().get("token");

    if (!token) {
      return Response.json(
        { message: "You are not login !!" },
        {
          status: 401,
        }
      );
    }

    const tokenPayload = verifyToken(token);
    if (!tokenPayload) {
      return Response.json(
        { message: "You are not login !!" },
        { status: 401 }
      );
    }

    const user = await UserModel.findOne({
      email: tokenPayload.email,
    });

    const body = req.json();
    const { title, isCompleted } = body;

    const newTodo = {
      title,
      isCompleted,
      user: user._id,
    };

    await TodoModel.create(newTodo);

    return Response.json(
      { message: "Todo Created Successfully :))" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { message: "Ooops!! Internal server error :((" },
      { status: 500 }
    );
  }
}
