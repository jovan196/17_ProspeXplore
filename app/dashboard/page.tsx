"use client";

import UserInfo from "../components/UserInfo";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import React, { useEffect } from "react";
import Image from "next/image";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  
  const handleNavClick = (id: string) => {
      router.push(`/#${id}`);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
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
     if (!session) {
      router.push("/authentication");
    }
  }, []);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
    return null;
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
                    <div className="dropdown-menu-links">
                      <Image src="/signin.png" alt="User" width={15} height={15} />
                      <Link href="/authentication">Sign In</Link>
                    </div>
                    <div className="dropdown-menu-links">
                      <Image src="/logout.png" alt="Logout" width={15} height={15} />
                      <button onClick={handleSignOut}>Log Out</button>
                    </div>
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