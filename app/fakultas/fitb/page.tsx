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
            Fakultas Ilmu dan Teknologi Kebumian (FITB)
          </div>
        
          <div className="fakultas-short-desc">
          Fakultas Ilmu dan Teknologi Kebumian (FITB) ITB lahir dari pemekaran Fakultas Ilmu Kebumian dan Teknologi Mineral (FIKTM). Ilmu-ilmu kebumian di FITB fokus pada pemahaman fenomena alam yang berkaitan dengan bumi, yang bermanfaat bagi kehidupan manusia serta eksplorasi sumber daya alam. FITB mengintegrasikan sains dasar dengan penerapannya.  Program Studi Sarjana di FITB adalah Teknik Geologi (GL), Teknik Geodesi dan Geomatika (GD), Meteorologi (ME), dan Oseanografi (OS).
          </div>

          <div className="fakultas-get-to-know">
          Get to know about FITB!
          </div>

          <div className="fakultas-article">
              <div className="fakultas-foto">
                <Image src="/FITB_Gedung.png" alt="Labtek" width={600} height={400}></Image>
              </div>
              <div className="fakultas-long-desc">
              Mahasiswa perlu menguasai mata pelajaran dasar seperti Fisika, Kimia, Matematika, dan Geografi. Mata kuliah yang akan dipelajari mencakup Geologi Dasar, Hidrologi, Geodesi, Penginderaan Jauh, Meteorologi, Oseanografi Fisis, serta eksplorasi sumber daya alam.
              Keterampilan yang dibutuhkan untuk berhasil di FITB meliputi kemampuan analisis data spasial dan geospasial, pemetaan, penggunaan perangkat lunak khusus seperti GIS (Geographic Information System), kemampuan observasi lapangan, serta keterampilan dalam penelitian ilmiah. Selain itu, kemampuan komunikasi yang baik juga sangat penting. Program studi ini tidak hanya melibatkan teori di kelas tetapi juga praktik lapangan dan penelitian untuk memberikan pengalaman langsung dalam memecahkan masalah terkait kebumian.
              </div>
          </div> 

          <div className="fakultas-graph"> 
            <Image src="/FITB_GajiLamaKerja.png" alt="Grafik gaji berdasarkan lama kerja" width={1000} height={1000} />
          </div>


          <div className="fakultas-graph"> 
            <Image src="/FITB_GajiTepatSetelahLulus.png" alt="Gaji tepat setelah lulus" width={1000} height={1000} />
          </div>

          <div className="fakultas-graph"> 
            <Image src="/FITB_JenisKerja.png" alt="Labtek" width={1000} height={1000}/>
          </div>

          <div className="fakultas-graph"> 
            <Image src="/FITB_GajiTahun.png" alt="Labtek" width={1000} height={1000}/>
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
