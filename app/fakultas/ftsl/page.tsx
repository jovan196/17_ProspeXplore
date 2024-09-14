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
            Fakultas Teknik Sipil dan Lingkungan (FTSL)
          </div>
        
          <div className="fakultas-short-desc">
            Fakultas Teknik Sipil dan Lingkungan (FTSL) dahulunya adalah Fakultas Teknik Sipil dan Perencanaan (FTSP), merupakan suatu fakultas yang terbentuk dari jurusan-jurusan pendidikan yang berada di lingkungan FTSP. Jurusan Teknik Sipil ini merupakan jurusan pendidikan sebagai cikal bakal lembaga pendidikan tinggi teknik di Indonesia - Technische Hoogesschool (THS) Bandoeng yang didirikan pada tanggal 3 Juli 1920. FTSL menaungi 5 jurusan, yaitu Rekayasa Infrastruktur Lingkungan (RIL), Teknik dan Pengelolaan Sumber Daya Air (TSA), Teknik Kelautan (KL), Teknik Lingkungan (TL), dan Teknik Sipil (SI).         
          </div>

          <div className="fakultas-get-to-know">
          Get to know about FTSL!
          </div>

          <div className="fakultas-article">
              <div className="fakultas-foto">
                <Image src="/FTSL_Gedung.jpg" alt="Labtek" width={600} height={400} className='rounded-2xl '></Image>
              </div>
              <div className="fakultas-long-desc">
              Mahasiswa yang ingin bersaing di FTSL perlu memiliki dasar yang kuat, terutama pada Matematika dan Fisika. Pada bidang ini berfokus pada analisis dan desain infrastruktur serta pengelolaan lingkungan. Mata kuliah yang dipelajari mencakupi Mekanika Tanah dan Struktur yang penting dalam Teknik Sipil untuk memahami perilaku tanah dan desain bangunan. Mata kuliah Hidrologi dan Teknik Sumber Daya Air memberikan pemahaman tentang pengelolaan air dan siklus hidrologi. Di Teknik Lingkungan, mahasiswa akan mempelajari mata kuliah seperti Pengolahan Air Limbah, Manajemen Limbah Padat. Dalam Teknik Kelautan, mata kuliah seperti Oseanografi Teknik dan Rekayasa Pantai dipelajari untuk memahami dinamika laut dan desain struktur pantai. Selain itu, program studi Rekayasa Infrastruktur Lingkungan (RIL) fokus pada pengembangan infrastruktur yang berkelanjutan dengan mata kuliah seperti Teknologi Lingkungan dan Perencanaan Infrastruktur. Teknik dan Pengelolaan Sumber Daya Air (TSA) membekali mahasiswa dengan pengetahuan tentang manajemen sumber daya air melalui mata kuliah seperti Pengelolaan DAS dan Hidroinformatika.              
              </div>
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
