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
            Sekolah Teknik Elektro dan Informatika (STEI)
          </div>
        
          <div className="fakultas-short-desc">
          Sekolah Teknik Elektro dan Informatika (STEI) resmi didirikan pada tahun 2006 yang menggabungkan dua departemen Fakultas Teknologi Industri, yakni Departemen Teknik Elektro (EL) dan Departemen Teknik Informatika (IF). Seiring berjalannya waktu dan perkembangan kurikulum, ditambahkan 4 jurusan baru, yakni Teknik Biomedis (EB), Teknik Tenaga Listrik (EP), Teknik Telekomunikasi (ET), dan Sistem dan Teknologi Informasi (II). Program studi Teknik Informatika dan Sistem dan Teknologi Informasi disatukan dalam rumpun studi Komputasi, sedangkan sisanya menjadi bagian dari rumpun studi Rekayasa.          </div>

          <div className="fakultas-get-to-know">
          Get to know about STEI!
          </div>

          <div className="fakultas-article">
              <div className="fakultas-foto">
                <Image src="/Labtek.png" alt="Labtek" width={600} height={400}></Image>
              </div>
              <div className="fakultas-long-desc">
                STEI ITB menawarkan lingkungan belajar yang komprehensif yang melampaui pendidikan tradisional di dalam kelas. Mahasiswa terlibat dalam proyek langsung, penelitian kolaboratif, dan kemitraan industri yang memberikan pengalaman dunia nyata. Inovasi, pemikiran kritis, dan keterampilan pemecahan masalah ditekankan untuk mempersiapkan lulusan menghadapi tantangan di era digital. Dengan fokus yang kuat pada pengetahuan teoritis dan keterampilan praktis, lulusan STEI ITB dilengkapi dengan baik untuk mendorong kemajuan teknologi dan membentuk masa depan industri teknologi Indonesia.               
              </div>
          </div> 

          <div className="fakultas-graph"> 
            <Image src="/STEI_GajiLamaKerja.png" alt="Grafik gaji berdasarkan lama kerja" width={1000} height={1000} />
          </div>


          <div className="fakultas-graph"> 
            <Image src="/STEI_GajiTepatSetelahLulus.png" alt="Gaji tepat setelah lulus" width={1000} height={1000} />
          </div>

          <div className="fakultas-graph"> 
            <Image src="/STEI_JenisKerja.png" alt="Labtek" width={1000} height={1000}/>
          </div>

          <div className="fakultas-graph"> 
            <Image src="/STEI_GajiTahun.png" alt="Labtek" width={1000} height={1000}/>
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
