import Link from "next/link";
import RegisterForm from "../components/RegisterForm";
import React from "react";
import { getServerSession } from "next-auth";
import handler from "../api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";

export default async function Home() {
  const session = await getServerSession({ ...handler, session: { strategy: 'jwt' } });
  console.log("Session:", session);
  
  if (session) {
    redirect("/dashboard")
  }

  return (
    <main className="bg-gradient-to-b from-[#1A3594] to-[#6B58B3] min-h-screen"> 
      <RegisterForm/>
      <div className="flex absolute bottom-0">
          <img 
            src="Vector.png"
            alt="logo"
            className="h-8 my-6 ml-6 mr-2"
          />
          <img
            src="Frame 13.png"
            alt="name"
            className="h-8 mt-6"
          />
        </div>
    </main>
  );
}