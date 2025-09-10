import React from "react";
// import "@/styles/page.module.css";

import Header from "@/components/Header";
import Todos from "@/components/Todos";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/auth";
import { redirect } from "next/navigation";
import connectToDB from "@/configs/db";
import TodoModel from "@/models/Todo";
import UserModel from "@/models/User";

export default async function Home() {
  const token = cookies().get("token")?.value;
  const tokenPayload = verifyToken(token);

  if (!tokenPayload) {
    return redirect("/signin");
  }

  // const res = await fetch(""); ❌

  connectToDB();
  const user = await UserModel.findOne({ email: tokenPayload.email });
  const todos = await TodoModel.find({ user: user._id });

  return (
    <>
      <h1>Next-Todos</h1>

      <div className="alert">
        <p>⚠ Please add a task first!</p>
      </div>

      <div className="container">
        <Header firstname={user.firstname} lastname={user.lastname} />
        <div className="pad">
          <Todos todos={JSON.parse(JSON.stringify(todos))} />
        </div>
      </div>
    </>
  );
}
