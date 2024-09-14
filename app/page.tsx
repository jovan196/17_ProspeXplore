"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import React, { useRef, useState, useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const slideData = [
  { title: "Sekolah Teknik Elektro Informatika (STEI)", description: "Sebagai pemimpin di bidang teknik elektro dan informatika, STEI menyiapkan mahasiswa untuk berinovasi dalam teknologi dan memastikan landasan yang kuat untuk karier di industri yang semakin berkembang pesat." },
  { title: "Fakultas Teknik Industri (FTI)", description: "Dengan fokus pada pengoptimalan sistem dan proses kompleks, FTI membekali lulusannya dengan keterampilan untuk memimpin di industri seperti manufaktur, logistik, dan operasional." },
  { title: "Fakultas Teknik Mesin dan Dirgantara (FTMD)", description: "FTMD menggabungkan pelatihan teknik mesin dan dirgantara yang ketat untuk menghasilkan lulusan yang mampu mengembangkan teknologi di sektor-sektor seperti otomotif, penerbangan, dan energi." },
  { title: "Sekolah Ilmu Teknologi Hayati (SITH)", description: "SITH menawarkan pendidikan komprehensif di bidang ilmu hayati dan bioteknologi untuk mempersiapkan lulusannya untuk berkontribusi dalam kemajuan di bidang kesehatan, pertanian, dan pengelolaan lingkungan." },
  { title: "Fakultas Ilmu dan Teknologi Kebumian (FITB)", description: "FITB mengkhususkan diri dalam ilmu dan teknologi kebumian untuk mempersiapkan mahasiswa berkarier di bidang geologi, meteorologi, dan konservasi lingkungan yang esensial bagi pembangunan berkelanjutan." },
  { title: "Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)", description: "FMIPA memberikan landasan kuat pada bidang matematika dan ilmu pengetahuan alam serta mengembangkan keterampilan analitis dan pemecahan masalah yang penting dalam penelitian, pendidikan, dan industri." },
  { title: "Fakultas Seni Rupa dan Desain (FSRD)", description: "FSRD mengembangkan kreativitas dan inovasi mahasiswa dalam seni rupa dan desain untuk mempersiapkannya ke dunia kerja yang dinamis di industri kreatif, mulai dari media digital hingga desain produk." },
  { title: "Fakultas Teknik Pertambangan dan Perminyakan (FTTM)", description: "FTTM yang berada di garis depan pendidikan teknik pertambangan dan perminyakan membekali mahasiswa dengan ilmu untuk menghadapi tantangan dalam produksi energi dan pengelolaan sumber daya." },
  { title: "Fakultas Teknik Sipil dan Lingkungan (FTSL)", description: "FTSL melatih mahasiswa di bidang teknik sipil dan lingkungan dengan fokus pada pengembangan infrastruktur berkelanjutan dan perlindungan lingkungan yang penting untuk pembangunan." },
  { title: "Sekolah Arsitektur, Perencanaan dan Pengembangan Kebijakan (SAPPK)", description: "SAPPK menawarkan pendekatan interdisipliner dalam arsitektur, perencanaan, dan pengembangan kebijakan dalam menciptakan lingkungan yang berkelanjutan dan inovatif." },
  { title: "Sekolah Bisnis dan Manajemen (SBM)", description: "SBM menyediakan pendidikan bisnis kelas dunia dengan fokus pada kepemimpinan, kewirausahaan, dan inovasi yang penting untuk sukses dalam lanskap bisnis global." },
  { title: "Sekolah Farmasi (SF)", description: "SF menawarkan kurikulum dalam ilmu farmasi untuk mempersiapkan lulusan dalam berkarier di bidang kesehatan, penelitian, dan industri farmasi, serta berkontribusi pada kesehatan dan kesejahteraan masyarakat." },  
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { data: session } = useSession();
  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };
  
  const router = useRouter();
  const handleRedirect = (title: string) => {
      if (title === "Sekolah Teknik Elektro Informatika (STEI)"){
        router.push("/fakultas/stei");
      }
      else if (title === "Sekolah Ilmu Teknologi Hayati (SITH)"){
        router.push("/fakultas/sith");
      }
      else if (title === "Fakultas Teknik Mesin dan Dirgantara (FTMD)"){
        router.push("/fakultas/ftmd");
      }
      else if (title === "Fakultas Ilmu dan Teknologi Kebumian (FITB)"){
        router.push("/fakultas/fitb");
      }
      else if (title === "Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)"){
        router.push("/fakultas/fmipa");
      }
      else if (title === "Fakultas Teknik Pertambangan dan Perminyakan (FTTM)"){
        router.push("/fakultas/fttm");
      }
      else if (title === "Fakultas Seni Rupa dan Desain (FSRD)"){
        router.push("/fakultas/fsrd");
      }
      else if (title === "Fakultas Teknik Industri (FTI)"){
        router.push("/fakultas/fti");
      }
      else if (title === "Fakultas Teknik Sipil dan Lingkungan (FTSL)"){
        router.push("/fakultas/ftsl");
      }
      else if (title === "Sekolah Arsitektur, Perencanaan dan Pengembangan Kebijakan (SAPPK)"){
        router.push("/fakultas/sappk");
      }
      else if (title === "Sekolah Bisnis dan Manajemen (SBM)"){
        router.push("/fakultas/sbm");
      }
      else if (title === "Sekolah Farmasi (SF)"){
        router.push("/fakultas/sf");
      }
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        phone,
        message,
      }),
    });

    if (response.ok) {
      alert("Pesan Anda berhasil terkirim! Silakan tunggu respons kami.");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      alert("Yah, ada masalah ketika mengirimkan pesan.");
    }
  };

  function slide(title: string, description: string) {
    return (
      <div className="bg-[#1A3594] shadow-lg rounded-lg p-4 text-white flex flex-col items-center 
                      w-full md:w-[250px] sm:w-[200px] h-[400px] md:h-[350px] sm:h-[300px]">
        <div className="w-full h-[200px] md:h-[175px] sm:h-[150px] mb-4 relative">
          <Image 
            src="/comp.png" 
            alt="Slide Image" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-grow">
          <p className="text-left text-lg font-semibold mb-2">{title}</p>
          <p className="text-sm overflow-hidden text-ellipsis">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="landing-page-top">
        <div className="header-container">
          <div className="header">
            <Image className="logo" src="/logo.png" alt="ProspeXplore" width={190} height={53} />
            <div className="navbar">
              <Link href="/">Home Page</Link>
              <Link href="#fakultas">Faculties</Link>
              <Link href="#tes-minat">Tes Minat</Link>
              <div className="dropdown">
              <span className="dropdown-button" onClick={toggleDropdown}>
                Hey,<span>&nbsp;{session?.user?.email}</span> ↓
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
                )}
              </div>
            </div>
          </div>
        </div>


        
        <div className="tagline-container">
          <div className="tagline-text">
            <div>
              <p className="welcome-text ">Selamat datang di,</p>
            </div>
            <div>
              <p className="app-name">ProspeXplore</p>
            </div>
            <div>
              <p className="app-description">
                Selamat datang di Prospexplore, Gerbang Anda menuju wawasan karier yang bermakna melalui platform tracer study kami yang komprehensif. Temukan jalur karier para lulusan ITB dan jelajahi peluang tak terbatas untuk perjalanan profesional Anda sendiri!</p>
            </div>
            <div>
              <button className="explore-button"onClick={() => {
          const fakultasElement = document.getElementById("fakultas");
          if (fakultasElement) {
            fakultasElement.scrollIntoView({ behavior: "smooth" });
          }
        }}>Explore Here</button>
            </div>
          </div>
          <div className="tagline-pic">
            <Image src="/mascot.png" alt="mascot" width={493} height={635}/>
          </div>
        </div>
      </div>

      <div id="fakultas" className="fakultas">
      <h1 className='font-bold text-poppins text-7xl pb-10 flex items-center justify-center text-[#1A3594]' style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.25)" }}>Fakultas</h1>
        <div className="flex flex-wrap max-w-screen-lg mx-auto">
          <div className="w-full px-4 md:w-1/2 flex flex-col items-center">
            <p className="text-sm text-[#1A3594] mb-10 xl:text-md text-left w-full">
              Institut Teknologi Bandung (ITB) menawarkan 12 fakultas unggulan, masing-masing dikenal 
              karena keunggulan akademik dan pendidikan yang berfokus pada karier. Fakultas-fakultas ini 
              menawarkan berbagai program yang dirancang untuk membekali mahasiswa dengan keterampilan dan 
              pengetahuan yang diperlukan agar mampu sukses di pasar kerja yang dinamis saat ini. 
              Mulai dari teknik hingga seni, fakultas-fakultas ITB mempersiapkan mahasiswa untuk menuju 
              tidak hanya kehidupan karier yang menjanjikan, tetapi juga mendorong kreativitas, inovasi, 
              dan kepemimpinan. Temukan masa depan Anda di ITB, tempat di mana pendidikan bertemu dengan 
              kesempatan, dan prospek karier tak terbatas.
            </p>
          </div>
          <div className="w-full px-4 mb-4 md:w-1/2 flex items-center justify-center">
            <img src="faculty.png" alt="" className="max-w-full" />
          </div>
        </div>
        <div className="relative pb-10 flex items-center justify-center">
        <Swiper
          className="relative mt-20 mx-20 w-full max-w-screen-lg overflow-hidden"
          loop={true}
          spaceBetween={5}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
        >
          {slideData.map((data, index) => (
            <SwiperSlide key={index} className='text-black' style={{ cursor: 'pointer' }}
            onClick={() => handleRedirect(data.title)}>
              {slide(data.title, data.description)}
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev absolute left-5 top-1/2 transform -translate-y-1/2 z-10">
            <FaArrowLeft className="text-white" />
          </div>
          <div className="swiper-button-next absolute right-5 top-1/2 transform -translate-y-1/2 z-10">
            <FaArrowRight className="text-white" />
          </div>
        </Swiper>
      </div>
      </div>
      
      <div id="tes-minat" className="tes-minat">
        <div className="tes-minat-judul">
          <p className="text-white mr-3">Test your</p>
          <p className="text-violet-500">Minat</p>
        </div>
        <div className="tes-minat-desc">
          <p>Temukan minat akademik Anda dengan asesmen minat kami. Tes ini mengevaluasi preferensi Anda di berbagai bidang utama, minat utama, keterampilan unggulan, lingkungan kerja yang ideal, dan lainnya. Dengan menganalisis faktor-faktor penting ini, kami memberikan rekomendasi yang dipersonalisasi untuk membantu Anda menentukan fakultas dan program studi yang paling sesuai dengan kepribadian dan aspirasi unik Anda.</p>
        </div>
        <div className="tes-minat-fakta">
          <div className="tes-minat-fakta-desc">
            <div className="tes-minat-fakta-desc-judul">
              <p>Apa Model yang Kami Gunakan?</p>
            </div>
            <p>Asesmen kami menggunakan model analisis multi-dimensi yang menggabungkan teori kepribadian Big Five dan kerangka gaya belajar modern. Pendekatan terpadu ini memastikan evaluasi holistik atas minat, bakat, dan preferensi Anda. Dengan menghubungkan respons Anda dengan data luas tentang program akademik dan hasil karier, model kami memberikan rekomendasi fakultas yang akurat dan dipersonalisasi, membimbing Anda menuju jalur pendidikan yang paling mungkin bagi Anda untuk berkembang dan meraih kesuksesan.</p>
            <div className="tes-minat-fakta-desc-desc"></div>
          </div>
          <div className="tes-minat-fakta-data">
            <Image className="tes-minat-fakta-data-pic" src="/target-full.png" alt="accuracy rate" width={590} height={298}/>
          </div>
        </div>
        <div className="tes-minat-button-container"><button  className="tes-minat-button" onClick={() => router.push("/minat-tes")}>Test Here!</button></div>
      </div>
      
      <form className="kontak" onSubmit={handleSubmit}>
        <div className="kontak-pic">
          <Image src="/contact-man.png" alt="contact" width={730} height={768}/>
        </div>
        
        <div className="kontak-komplain">
          <div className="kontak-komplain-judul">
            <p>Let&apos;s Stay In Touch!</p>
          </div>
          <div className="komplain-container">
            <div className="email">
              <Image className="komplain-logo-email" src="/email1.png" alt="email-logo" width={20} height={16} />
              <input
                className="email-input"
                type="text"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="no-telp">
              <Image className="komplain-logo" src="/phone1.png" alt="phone-logo" width={20} height={20} />
              <input
                className="no-telp-input"
                type="text"
                placeholder="+62XXX-XXXX-XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="komplain-text">
              <textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="komplain-button">
              <button type="submit">Send</button>
            </div>
          </div>
        </div>
      </form>
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
  );
}
