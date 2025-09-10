import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { generateToken, hashPassword } from "@/utils/auth";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();

    const { firstname, lastname, username, email, password } = body;

    // Validation
    if (
      !firstname.trim() ||
      !lastname.trim() ||
      !username.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      return Response.json(
        { message: "Data is not valid !!" },
        { status: 422 }
      );
    }

    const isUserExist = await UserModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isUserExist) {
      return Response.json(
        { message: "This username or email exist already !!" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const token = generateToken({ email });

    const users = await UserModel.find({});

    await UserModel.create({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
      role: users.length > 0 ? "USER" : "ADMIN",
    });

    return Response.json(
      { message: "User Created Successfully :))" },
      {
        status: 201,
        headers: { "Set-Cookie": `token=${token}` },
      }
    );
  } catch (err) {
    console.log(err);
    return Response.json(
      { message: "UnKnown Internal Server Erorr !!" },
      { status: 500 }
    );
  }
}
