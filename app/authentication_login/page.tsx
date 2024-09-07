"use client";

import Link from "next/link";
import LoginForm from "../components/LoginForm";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "ProspeXplore";

    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = "logo-half1.png";
    } else {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.href = "logo-half1.png";
      document.head.appendChild(newFavicon);
    }
  }, []);
  return (
    <main className="bg-white min-h-screen flex flex-1">
      <div className="w-1/2 bg-gradient-to-b from-[#1A3594] to-[#6B58B3] flex justify-between">
        <div className="flex">
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
        
      </div>
      <LoginForm/>
    </main>
  );
}