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
            Fakultas Teknik Mesin dan Dirgantara (FTMD) ITB didirikan pada 10 September 2007 sebagai hasil pemekaran dari Fakultas Teknologi Industri (FTI). Program studi di FTMD memiliki sejarah panjang sejak pembentukan Program Studi Teknik Mesin (MS) pada 1 Agustus 1941 di Technische Hoogeschool (TH) Bandoeng. Seiring waktu, program ini berkembang dan mencakup Teknik Penerbangan / Dirgantara (AE) yang akhirnya menjadi program studi secara terpisah pada tahun 1991, serta Teknik Material (MT) yang mulai diperkenalkan pada tahun 1994. 
          </div>

          <div className="fakultas-get-to-know">
          Get to know about FTMD!
          </div>

          <div className="fakultas-article">
              <div className="fakultas-foto">
                <Image src="/FTMD_Gedung.png" alt="Labtek" width={600} height={400}></Image>
              </div>
              <div className="fakultas-long-desc">
                FTMD saat ini menawarkan program pendidikan sarjana, magister, dan doktor dalam bidang Teknik Mesin, Teknik Dirgantara, dan Teknik Material. Mahasiswa di FTMD perlu memiliki dasar yang kuat dalam Matematika, Fisika, dan Kimia. Mata kuliah yang akan dipelajari seperti Mekanika Teknik, Termodinamika, Dinamika Penerbangan, dan Material Komposit. Keterampilan yang diperlukan meliputi kemampuan analisis dan pemecahan masalah teknis, keterampilan praktis dalam penggunaan perangkat dan teknologi terkini, serta kemampuan dalam desain dan simulasi dengan menggunakan perangkat lunak CAD (Computer-Aided Design) dan CAE (Computer-Aided Engineering). Mahasiswa juga perlu mengembangkan keterampilan komunikasi yang baik.
              </div>
          </div> 

          <div className="fakultas-graph"> 
            <Image src="/FTMD_GajiLamaKerja.png" alt="Grafik gaji berdasarkan lama kerja" width={1000} height={1000} />
          </div>


          <div className="fakultas-graph"> 
            <Image src="/FTMD_GajiTepatSetelahLulus.png" alt="Gaji tepat setelah lulus" width={1000} height={1000} />
          </div>

          <div className="fakultas-graph"> 
            <Image src="/FTMD_JenisKerja.png" alt="Labtek" width={1000} height={1000}/>
          </div>

          <div className="fakultas-graph"> 
            <Image src="/FTMD_GajiTahun.png" alt="Labtek" width={1000} height={1000}/>
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
