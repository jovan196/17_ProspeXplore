"use client";

import Link from 'next/link';
import Image from "next/image";
import globalStyles from "@/styles/Home.module.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import React, { useEffect } from "react";

export default function Home() {
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

  return (
    <div id="page-fakultas" className="page-fakultas">
      <main>
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
          <div className="fakultas-nama">
            Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)
          </div>
        
          <div className="fakultas-short-desc">
          Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA) merupakan fakultas tertua dan terdepan di Indonesia dalam bidang matematika dan ilmu pengetahuan alam. Dibentuk pada tanggal 6 Oktober 1947 dengan sebutan Faculteit van Exacte Wetenschap, pada tanggal 22 September 1948 nama fakultas ini berubah menjadi Faculteit van Wiskunde en Natuur Wetenschap. Kemudian, pada tahun 1950 berubah nama lagi menjadi Fakultas Ilmu Pengetahuan dan Ilmu Alam (FIPIA), dan pada tahun 1972 hingga sekarang berubah menjadi Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA). FMIPA terdiri dari 5 program studi yaitu Kimia (KI), Astronomi (AS), Fisika (FI), Matematika (MA), dan Aktuaria (AK).
          </div>

          <div className="fakultas-get-to-know">
          Get to know about FMIPA!
          </div>

          <div className="fakultas-article">
              <div className="fakultas-foto">
                <Image src="/FMIPA_Gedung.png" alt="Labtek" width={600} height={400}></Image>
              </div>
              <div className="fakultas-long-desc">
              Mahasiswa yang ingin bersaing di FMIPA harus memiliki pemahaman yang kuat dalam mata pelajaran dasar seperti Matematika, Fisika, dan Kimia, karena ini adalah fondasi utama untuk mempelajari lebih lanjut ilmu-ilmu yang lebih spesifik. Setiap program studi memiliki fokus yang berbeda: Kimia berfokus pada studi zat dan reaksi kimia; Astronomi pada studi benda-benda langit dan fenomena alam semesta; Fisika pada hukum-hukum alam dan interaksi materi serta energi; Matematika pada teori, analisis, dan aplikasi matematika; sedangkan Aktuaria menggabungkan matematika, statistika, dan teori risiko untuk analisis keuangan dan asuransi.
              </div>
          </div> 

          <div className="fakultas-graph"> 
            <Image src="/FMIPA_GajiLamaKerja.png" alt="Grafik gaji berdasarkan lama kerja" width={1000} height={1000} />
          </div>


          <div className="fakultas-graph"> 
            <Image src="/FMIPA_GajiTepatSetelahLulus.png" alt="Gaji tepat setelah lulus" width={1000} height={1000} />
          </div>

          <div className="fakultas-graph"> 
            <Image src="/FMIPA_JenisKerja.png" alt="Labtek" width={1000} height={1000}/>
          </div>

          <div className="fakultas-graph"> 
            <Image src="/FMIPA_GajiTahun.png" alt="Labtek" width={1000} height={1000}/>
          </div>

          <div className="footer">
            <div className="footer-logo">
            <Image className="mr-3" src="/logo-half1.png" alt="half-1" width={45} height={40}/>
            <Image src="/logo-half2.png" alt="half-2" width={185} height={37}/>
            </div>
          <div className="footer-media">
          <div className="footer-media-icon">
            <Image src="/social.png" alt="socmed-logo" width={121} height={26} />
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
