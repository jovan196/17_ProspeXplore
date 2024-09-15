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
            Sekolah Farmasi (SF)
          </div>
        
          <div className="fakultas-short-desc">
          Sekolah Farmasi (SF) ITB didirikan sebagai Departemen Farmasi pada 6 Oktober 1947 di bawah Faculteit voor Wiskunde en Natuurwetenschapen, bagian dari Universitas Indonesia. Pada 1 Februari 1949, fakultas tersebut berganti nama menjadi Fakultas Ilmu Pengetahuan dan Ilmu Alam (FIPIA). Pada tahun 1959, fakultas ini menjadi bagian dari ITB, dan Departemen Farmasi bergabung dengan Departemen Kimia dan Biologi hingga tahun 1961. Pada tahun 1973, Departemen Farmasi bergabung dengan Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA). Seiring berjalannya waktu, kurikulum dan struktur organisasi terus berkembang. Pada tahun 2005, Departemen Farmasi resmi berubah status menjadi Sekolah Farmasi (SF) yang menyediakan program Sains dan Teknologi Farmasi (FA) serta Farmasi Klinik dan Komunitas (FKK).           </div>

          <div className="fakultas-get-to-know">
          Get to know about SF!
          </div>

          <div className="fakultas-article">
              <div className="fakultas-foto">
                <Image src="/SF_Gedung.png" alt="Labtek" width={600} height={400}></Image>
              </div>
              <div className="fakultas-long-desc">
                Mahasiswa SF harus memiliki dasar yang kuat dalam Kimia, Biologi, dan Matematika, karena ketiga bidang ini merupakan fondasi dalam memahami ilmu farmasi. Mata kuliah yang diajarkan mencakup Farmakologi, Kimia Farmasi, Formulasi, Farmasi Klinik, dan Biologi Farmasi, dengan kombinasi teori, praktik laboratorium, dan penelitian. Keterampilan yang harus dikuasai meliputi analisis laboratorium, penguasaan teknologi farmasi modern, pemahaman regulasi obat dan keamanan pangan, serta kemampuan komunikasi yang baik.              </div>
          </div> 

          <div className="fakultas-graph"> 
            <Image src="/SF_GajiLamaKerja.png" alt="Grafik gaji berdasarkan lama kerja" width={1000} height={1000} />
          </div>


          <div className="fakultas-graph"> 
            <Image src="/SF_GajiTepatSetelahLulus.png" alt="Gaji tepat setelah lulus" width={1000} height={1000} />
          </div>

          <div className="fakultas-graph"> 
            <Image src="/SF_JenisKerja.png" alt="Labtek" width={1000} height={1000}/>
          </div>

          <div className="fakultas-graph"> 
            <Image src="/SF_GajiTahun.png" alt="Labtek" width={1000} height={1000}/>
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
