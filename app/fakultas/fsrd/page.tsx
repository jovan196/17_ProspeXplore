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
            Fakultas Seni Rupa dan Desain (FSRD)
          </div>
        
          <div className="fakultas-short-desc">
          Fakultas Seni Rupa dan Desain (FSRD) ITB didirikan pada tahun 1984 setelah mengalami perkembangan panjang dari sebagai Balai Pendidikan Universiter Guru Gambar di bawah naungan Fakultas Ilmu Pengetahuan Teknik Universitas Indonesia pada tahun 1947. Awalnya, FSRD mencakup tiga jurusan, yakni Seni Rupa Murni, Desain, dan Sosioteknologi. Setelah mengalami berbagai perubahan dan perkembangan, FSRD kini menawarkan 5 program studi Sarjana, yakni Desain Interior (DI), Desain Komunikasi dan Visual (DKV), Desain Produk (DP), Kria (KR), dan Seni Rupa (SR).
          </div>

          <div className="fakultas-get-to-know">
          Get to know about FSRD!
          </div>

          <div className="fakultas-article">
              <div className="fakultas-foto">
                <Image src="/FSRD_Gedung.png" alt="Labtek" width={600} height={400}></Image>
              </div>
              <div className="fakultas-long-desc">
              Mahasiswa yang ingin menekuni di FSRD harus memiliki dasar yang kuat dalam keterampilan artistik dan pemahaman estetika. Kemampuan menggambar, pemahaman warna, komposisi, dan prinsip desain merupakan pondasi penting untuk semua program studi di FSRD. Mata kuliah yang akan dipelajari meliputi teori dan praktik, diantaranya Desain Grafis, Ilustrasi, Fotografi, dan Teknik Visual. Untuk program studi DKV akan mempelajari Prinsip Desain Interior, Material, dan Konstruksi, program studi DI & DP mempelajari  Pengembangan Produk dan Ergonomi, program studi Kria mahasiswa akan mendalami keterampilan tangan dan penggunaan material tradisional serta modern, sementara program studi Seni Rupa berfokus pada ekspresi artistik melalui berbagai medium seperti lukisan, patung, dan instalasi.
              </div>
          </div> 

          <div className="fakultas-graph"> 
            <Image src="/FSRD_GajiLamaKerja.png" alt="Grafik gaji berdasarkan lama kerja" width={1000} height={1000} />
          </div>


          <div className="fakultas-graph"> 
            <Image src="/FSRD_GajiTepatSetelahLulus.png" alt="Gaji tepat setelah lulus" width={1000} height={1000} />
          </div>

          <div className="fakultas-graph"> 
            <Image src="/FSRD_JenisKerja.png" alt="Labtek" width={1000} height={1000}/>
          </div>

          <div className="fakultas-graph"> 
            <Image src="/FSRD_GajiTahun.png" alt="Labtek" width={1000} height={1000}/>
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
