import Link from "next/link";
import RegisterForm from "../components/RegisterForm";
import React, {useEffect} from "react";
import { getServerSession } from "next-auth";
import { GET, POST } from '../api/auth/[...nextauth]/route';
import {redirect} from "next/navigation";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ProspeXplore',
  description:
    'A Webpage that contains information about Peter Wongsoredjo',
  icons: {
    icon: '/logo-half1.png', // Ensure this path matches your favicon file in the public directory
  },
};

export default async function Home() {
  const handler = {};
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