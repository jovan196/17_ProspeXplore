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
            Fakultas Teknik Pertambangan dan Perminyakan (FTTM)
          </div>
        
          <div className="fakultas-short-desc">
          Fakultas Teknik Pertambangan dan Perminyakan (FTTM) ITB adalah salah satu dari 12 fakultas di Institut Teknologi Bandung. Sejarah FTTM dimulai pada tahun 1959 dengan pendirian Fakultas Teknologi Mineral (FTM), Berasal dari Departemen Pertambangan yang didirikan pada tahun 1949 dan Departemen Geologi pada tahun 1950. Perkembangan lebih lanjut terjadi pada tahun 1962 dengan berdirinya Departemen Teknik Perminyakan untuk memenuhi kebutuhan spesialisasi di bidang perminyakan. Selanjutnya, Departemen Teknik Geofisika juga menjadi bagian dari fakultas ini setelah sebelumnya menjadi program studi di bawah Departemen Teknik Geologi. Pada tahun 2007, setelah penggabungan dengan Departemen Geofisika dan Meteorologi dari FMIPA, fakultas ini dipecah menjadi dua Unit Keilmuan Serumpun : FTTM dan Fakultas Ilmu dan Teknologi Kebumian (FITB). Sejak 12 Februari 2007, FTTM resmi berdiri sendiri, mengelola empat program studi sarjana, empat program magister, dan tiga program doktoral. Untuk program Sarjana, FTTM menaungi Teknik Pertambangan (TA), Teknik Perminyakan (TM), Teknik Geofisika (TG), dan Teknik Metalurgi (MG).
          </div>

          <div className="fakultas-get-to-know">
          Get to know about FTTM!
          </div>

          <div className="fakultas-article">
              <div className="fakultas-foto">
                <Image src="/FTTM_Gedung.png" alt="Labtek" width={600} height={400}></Image>
              </div>
              <div className="fakultas-long-desc">
              Mahasiswa yang ingin bersaing di FTTM harus memiliki dasar yang kuat dalam ilmu eksakta seperti Matematika, Fisika, dan Kimia. Dalam program studi Teknik Pertambangan, Teknik Perminyakan, Teknik Geofisika, dan Teknik Metalurgi, mahasiswa akan mempelajari mata kuliah inti seperti Geomekanika, Eksplorasi dan Produksi Minyak dan Gas, Geofisika Eksplorasi, Teknik Pengeboran, Proses Metalurgi, dan Manajemen Proyek. Mata kuliah ini didukung oleh pembelajaran praktik lapangan, penggunaan teknologi eksplorasi dan produksi, serta simulasi komputer untuk memahami proses industri.
              </div>
          </div> 

          <div className="fakultas-graph"> 
            <Image src="/FTTM_GajiLamaKerja.png" alt="Grafik gaji berdasarkan lama kerja" width={1000} height={1000} />
          </div>


          <div className="fakultas-graph"> 
            <Image src="/FTTM_GajiTepatSetelahLulus.png" alt="Gaji tepat setelah lulus" width={1000} height={1000} />
          </div>

          <div className="fakultas-graph"> 
            <Image src="/FTTM_JenisKerja.png" alt="Labtek" width={1000} height={1000}/>
          </div>

          <div className="fakultas-graph"> 
            <Image src="/FTTM_GajiTahun.png" alt="Labtek" width={1000} height={1000}/>
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
