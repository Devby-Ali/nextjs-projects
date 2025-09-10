import React from "react";
// import "@/styles/page.module.css";

import Header from "@/components/Header";
import Todos from "@/components/Todos";
import { cookies } from "next/headers";
// import connectToDB from "@/configs/db";
// import { verifyToken } from "@/utils/auth";
// import TodoModel from "@/models/Todo";
// import UserModel from "@/models/User";
// import { useRouter } from "next/router";

export default function Home() {
  console.log(cookies());
  return (
    <>
      <h1>Next-Todos</h1>

      <div className="alert">
        <p>⚠ Please add a task first!</p>
      </div>

      <div className="container">
        <Header />
        <div className="pad">
          <Todos />
        </div>
      </div>
    </>
  );
}
