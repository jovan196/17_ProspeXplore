"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signIn,useSession,signOut } from "next-auth/react";
import React from "react";
import Link from "next/link";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
  
        try {
          const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
          });
  
          if (res && res.error) {
            setError("Invalid Credentials");
            return;
          }
  
          router.replace("dashboard");
        } catch (error) {
          console.log(error);
        }
  };
    return (
        <div className="w-1/2 items-center justify-center px-12 pt-20">
            <div className="w-full "></div>
                <h2 
                className="text-4xl bg-gradient-to-r from-[#1A3594] to-[#6B58B3] font-extrabold font-poppins inline-block text-transparent bg-clip-text">
                    Sign In To Your Account
                </h2>
                <p className="font-poppins text-[#1A3594]">Let&apos;s sign in to your account and get started!</p>

                <form onSubmit={handleSubmit} className="mt-6">
                    <p className="font-semibold font-poppins bg-gradient-to-r from-[#1A3594] to-[#6B58B3] inline-block text-transparent bg-clip-text">Email Address</p>
                    <div className="mb-4 text-gray-950">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            type="email"
                            placeholder="Enter Email Address"
                            className="block w-full px-3 py-3 border-2 rounded-full"
                        />
                    </div>
                    <p className="font-semibold font-poppins bg-gradient-to-r from-[#1A3594] to-[#6B58B3] inline-block text-transparent bg-clip-text">Password</p>

                    <div className="mb-10 text-gray-950">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                            className="block w-full px-3 py-3 border-2 rounded-full"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-3 text-base font-bold text-white bg-gradient-to-r from-[#1A3594] to-[#6B58B3] rounded-full"
                    >
                        Sign In
                    </button>
                </form>

                {error && (
                    <div className="w-full px-4 py-2 rounded-md text-red-600">
                        {error}
                    </div>
                )}

                <p className="my-4 text-center text-[#1A3594] font-poppins">
                    Don&apos;t have an account? <Link href="/authentication" className="font-extrabold bg-gradient-to-r from-[#1A3594] to-[#6B58B3] inline-block text-transparent bg-clip-text">Sign Up</Link>
                </p>

            
        </div>
            
        
    );
};
