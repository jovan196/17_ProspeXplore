"use client";

import React from "react";
import UserInfo from "../components/UserInfo";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();
  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };
  const router = useRouter();
  const handleNavClick = (id: string) => {
      router.push(`/#${id}`);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return(
    <main className="bg-gradient-to-b from-[#1A3594] to-[#6B58B3] min-h-screen">
      <div className="header-container">
        <div className="header">
          <img 
            src="/logo.png"
            alt="ProspeXplore"
            className="logo"
          />
          <div className="navbar">
                <Link href="/">Home Page</Link>
                <span className="navbar-link" onClick={() => handleNavClick('fakultas')}>Faculties</span>
                <span className="navbar-link" onClick={() => handleNavClick('tes-minat')}>Tes Minat</span>
                <div className="dropdown">
                <span className="dropdown-button" onClick={toggleDropdown}>
                  Hey, <span>&nbsp;{session?.user?.email}</span> ↓
                </span>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <Link href="/authentication">Sign In</Link>
                    <Link href="/settings">Settings</Link>
                    <button onClick={handleSignOut}>Log Out</button>
                  </div>
                )};
                  </div>
            </div>
        </div>
      </div>
      <UserInfo/>
      
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