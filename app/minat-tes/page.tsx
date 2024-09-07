"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import React, { useEffect } from "react";

export default function Home() {
  const [pelajaranFavorit, setPelajaranFavorit] = useState("");
  const [minatUtama, setMinatUtama] = useState("");
  const [keterampilanUnggulan, setKeterampilanUnggulan] = useState("");
  const [lingkunganKerja, setLingkunganKerja] = useState("");
  const [tipeKepribadian, setTipeKepribadian] = useState("");
  const [gayaBelajar, setGayaBelajar] = useState("");
  const [fakultas, setFakultas] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pelajaranFavorit,
        minatUtama,
        keterampilanUnggulan,
        lingkunganKerja,
        tipeKepribadian,
        gayaBelajar,
      }),
    });

    const result = await response.json();
    if (response.ok) {
      setFakultas(result.fakultas); // Assuming result.fakultas is a single value, adjust if it's an array
      // Optional redirect based on result or other logic
      if (result.fakultas === "Sekolah Teknik Elektro Informatika (STEI)") {
        router.push("/fakultas/stei");
      }
    } else {
      console.error(result.message || 'An error occurred');
    }
  };

  return (
    <main className="bg-gradient-to-b from-[#1A3594] to-[#6B58B3] min-h-screen"> 
        <div>
            <div className="header-container">
                <div className="header">
                    <Image className="logo" src="/logo.png" alt="ProspeXplore" width={190} height={53} />
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
                          <button onClick={() => signOut({ callbackUrl: "/" })}>Log Out</button>
                        </div>
                      )};
                  </div>
            </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-4">
                <div className="font-poppins font-extrabold text-4xl inline-flex text-center">
                    <h2 className="text-white">Test Your</h2><span className="bg-gradient-to-r from-white to-[#6B58B3] text-transparent bg-clip-text">&nbsp;Minat</span>
                </div>
                
                <div className="max-w-md bg-white py-10 px-20 mt-5 rounded-lg flex flex-col ">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <label htmlFor="Pelajaran Favorit" className="text-[#1A3594] font-bold font-poppins">Pelajaran Favorit</label>
                        <select 
                          value={pelajaranFavorit} 
                          onChange={(e) => setPelajaranFavorit(e.target.value)} 
                          className="bg-[#1A3594] text-white p-3 rounded-lg"
                        >
                            <option value="">Select</option>
                            <option value="Kimia">Kimia</option>
                            <option value="Matematika">Matematika</option>
                            <option value="Fisika">Fisika</option>
                            <option value="Biologi">Biologi</option>
                            <option value="Seni Budaya">Seni Budaya</option>
                        </select>

                        <label htmlFor="Minat Utama" className="mt-4 text-[#1A3594] font-bold font-poppins">Minat Utama</label>
                        <select 
                          value={minatUtama} 
                          onChange={(e) => setMinatUtama(e.target.value)} 
                          className="bg-[#1A3594] text-white p-3 rounded-lg"
                        >
                            <option value="">Select</option>
                            <option value="Bisnis">Bisnis</option>
                            <option value="Kesehatan">Kesehatan</option>
                            <option value="Sains">Sains</option>
                            <option value="Seni">Seni</option>
                            <option value="Teknologi">Teknologi</option>
                            <option value="Teknik">Teknik</option>
                        </select>
                        
                        <label htmlFor="Keterampilan Unggulan" className="mt-4 text-[#1A3594] font-bold font-poppins">Keterampilan Unggulan</label>
                        <select 
                          value={keterampilanUnggulan} 
                          onChange={(e) => setKeterampilanUnggulan(e.target.value)} 
                          className="bg-[#1A3594] text-white p-3 rounded-lg"
                        >
                            <option value="">Select</option>
                            <option value="Kreativitas">Kreativitas</option>
                            <option value="Teknis">Teknis</option>
                            <option value="Komunikasi">Komunikasi</option>
                            <option value="Pemecahan Masalah">Pemecahan Masalah</option>
                            <option value="Analitis">Analitis</option>
                        </select>

                        <label htmlFor="Lingkungan Kerja" className="mt-4 text-[#1A3594] font-bold font-poppins">Lingkungan Kerja</label>
                        <select 
                          value={lingkunganKerja} 
                          onChange={(e) => setLingkunganKerja(e.target.value)} 
                          className="bg-[#1A3594] text-white p-3 rounded-lg"
                        >
                            <option value="">Select</option>
                            <option value="Kantor">Kantor</option>
                            <option value="Remote">Remote</option>
                            <option value="Lapangan">Lapangan</option>
                        </select>

                        <label htmlFor="Tipe Kepribadian" className="mt-4 text-[#1A3594] font-bold font-poppins">Tipe Kepribadian</label>
                        <select 
                          value={tipeKepribadian} 
                          onChange={(e) => setTipeKepribadian(e.target.value)} 
                          className="bg-[#1A3594] text-white p-3 rounded-lg"
                        >
                            <option value="">Select</option>
                            <option value="Ekstrovert">Ekstrovert</option>
                            <option value="Introvert">Introvert</option>
                        </select>
                        
                        <label htmlFor="Gaya Belajar" className="mt-4 text-[#1A3594] font-bold font-poppins">Gaya Belajar</label>
                        <select 
                          value={gayaBelajar} 
                          onChange={(e) => setGayaBelajar(e.target.value)} 
                          className="bg-[#1A3594] text-white p-3 rounded-lg"
                        >
                            <option value="">Select</option>
                            <option value="Visual">Visual</option>
                            <option value="Auditori">Auditori</option>
                            <option value="Kinestetik">Kinestetik</option>
                        </select>

                        <button type="submit" className="bg-[#6B58B3] rounded-full mt-6 py-3 px-6 text-white font-poppins font-bold shadow-lg">
                            Submit
                        </button>
                    </form>

                      <div className="mt-6">
                        <h3 className="text-black font-bold">Recommended Fakultas:</h3>
                        <p className="text-black text-center font-bold font-poppins text-2xl">{fakultas}</p>
                      </div>
                </div>
            </div>
            <div className="flex fixed bottom-0">
                <img 
                    src="/Vector.png"
                    alt="logo"
                    className="h-8 my-6 ml-6 mr-2"
                />
                <img
                    src="/Frame 13.png"
                    alt="name"
                    className="h-8 mt-6"
                />
            </div>
        </div>
    </main>
  );
}
