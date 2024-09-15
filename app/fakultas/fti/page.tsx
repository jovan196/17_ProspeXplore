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
            Fakultas Teknik Mesin dan Dirgantara (FTMD)
          </div>
        
          <div className="fakultas-short-desc">
          Fakultas Teknologi Industri (FTI) ITB diresmikan pada tahun 1973. Hingga Desember 2005, FTI menaungi berbagai prodi-prodi teknik seperti Teknik Elektro, Teknik Mesin, Teknik Penerbangan, dan Teknik Industri sebelum dipecah dan dibentuk fakultas-fakultas baru. Saat ini, terdapat 6 program studi Sarjana yang berada di bawah FTI, yakni Teknik Kimia (TK), Teknik Fisika (TF), Teknik Industri (TI), Manajemen Rekayasa (MR), Teknik Bioenergi dan Kemurgi (TB), dan Teknik Pangan (TP).          </div>

          <div className="fakultas-get-to-know">
          Get to know about FTI!
          </div>

          <div className="fakultas-article">
              <div className="fakultas-foto">
                <Image src="/FTI_Gedung.png" alt="Labtek" width={600} height={400}></Image>
              </div>
              <div className="fakultas-long-desc">
              Mahasiswa yang ingin bersaing di FTI harus memiliki dasar yang kuat dalam ilmu seperti Matematika, Fisika, dan Kimia. Memiliki keterampilan analisis dan pemecahan masalah. Setiap program studi memiliki fokus yang berbeda. Teknik Kimia berfokus pada proses produksi dan pengolahan bahan kimia. Teknik Fisika pada penerapan prinsip fisika dalam teknologi. Teknik Industri pada optimalisasi sistem produksi dan manajemen. Manajemen Rekayasa pada integrasi antara manajemen dan teknik. Teknik Bioenergi dan Kemurgi pada pemanfaatan sumber daya hayati untuk energi dan bahan. Teknik Pangan pada teknologi pengolahan dan keamanan pangan. Mata kuliah yang dipelajari mencakup Termodinamika, Rekayasa Proses, Sistem Kendali, Riset Operasi, hingga Teknologi Pangan dan Energi Terbarukan. Mahasiswa FTI juga dilatih untuk menguasai teknologi terkini dan bekerja dalam tim multidisiplin untuk memecahkan masalah kompleks dalam industri.              </div>
          </div> 

          <div className="fakultas-graph"> 
            <Image src="/FTI_GajiLamaKerja.png" alt="Grafik gaji berdasarkan lama kerja" width={1000} height={1000} />
          </div>


          <div className="fakultas-graph"> 
            <Image src="/FTI_GajiTepatSetelahLulus.png" alt="Gaji tepat setelah lulus" width={1000} height={1000} />
          </div>

          <div className="fakultas-graph"> 
            <Image src="/FTI_JenisKerja.png" alt="Labtek" width={1000} height={1000}/>
          </div>

          <div className="fakultas-graph"> 
            <Image src="/FTI_GajiTahun.png" alt="Labtek" width={1000} height={1000}/>
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
