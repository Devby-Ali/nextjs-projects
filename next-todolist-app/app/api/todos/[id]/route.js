import connectToDB from "@/configs/db";
import TodoModel from "@/models/Todo";

export async function DELETE(req, { params }) {
  connectToDB();
  try {
    await TodoModel.findOneAndDelete({ _id: params.id });

    return Response.json(
      { message: "Todo Removed Successfully :))" },
      { status: 200 }
    );
  } catch (err) {
    console.log("Err ->", err);

    return Response.json(
      { message: "Ooops!! Internal server error :((" },
      { status: 500 }
    );
  }
}
