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
            Sekolah Ilmu dan Teknologi Hayati (SITH)
          </div>
        
          <div className="fakultas-short-desc">
          Pada abad ke-21 ini, keahlian dalam bidang ilmu-ilmu hayati (life sciences) akan memegang peranan penting dalam pengembangan ilmu pengetahuan kehayatan (biosains), bioteknologi, dan pengelolaan sumber daya alam. Bahkan bioteknologi diperkirakan akan menjadi salah satu ilmu terapan (applied sciences) yang terpenting. Maka, Sekolah Ilmu dan Teknologi Hayati didirikan untuk menjawab tantangan tersebut. SITH dibagi menjadi dua rumpun studi untuk Sarjana, yakni program Sains yang membawahi dua prodi, Biologi (BI) dan Mikrobiologi (BM), dan program Rekayasa yang membawahi 4 prodi, yakni Rekayasa Hayati (BE), Rekayasa Pertanian (BA), Rekayasa Kehutanan (BW), dan Teknologi Pasca Panen (BP).
          </div>

          <div className="fakultas-get-to-know">
          Get to know about SITH!
          </div>

          <div className="fakultas-article">
              <div className="fakultas-foto">
                <Image src="/SITH_Gedung.png" alt="Labtek" width={600} height={400}></Image>
              </div>
              <div className="fakultas-long-desc">
              Mahasiswa SITH perlu keterampilan seperti penelitian laboratorium, analisis data, dan pemecahan masalah kompleks. Pemahaman yang kuat dalam mata pelajaran Biologi, Kimia, dan Matematika sangat penting sebagai dasar untuk studi lanjut. Di SITH, mahasiswa akan mempelajari mata kuliah seperti Biologi Molekuler, Genetika, Bioteknologi, Mikrobiologi, Ekologi, dan Pengelolaan Sumber Daya Hayati. Mata kuliah ini dirancang untuk memberikan pemahaman mendalam tentang proses biologis, teknologi terbaru dalam bioteknologi, serta metode pengelolaan sumber daya alam yang berkelanjutan. Keterampilan tambahan seperti kemampuan berpikir kritis, inovasi, dan kolaborasi multidisiplin juga ditekankan untuk memastikan lulusan siap bersaing di berbagai sektor, termasuk industri, pemerintahan, dan kewirausahaan.              </div>
          </div> 

          <div className="fakultas-graph"> 
            <Image src="/SITH_GajiLamaKerja.png" alt="Grafik gaji berdasarkan lama kerja" width={1000} height={1000} />
          </div>


          <div className="fakultas-graph"> 
            <Image src="/SITH_GajiTepatSetelahLulus.png" alt="Gaji tepat setelah lulus" width={1000} height={1000} />
          </div>

          <div className="fakultas-graph"> 
            <Image src="/SITH_JenisKerja.png" alt="Labtek" width={1000} height={1000}/>
          </div>

          <div className="fakultas-graph"> 
            <Image src="/SITH_GajiTahun.png" alt="Labtek" width={1000} height={1000}/>
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
