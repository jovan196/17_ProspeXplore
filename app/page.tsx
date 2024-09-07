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
  { title: "Sekolah Teknik Elektro Informatika (STEI)", description: "As a leader in the field of electrical and informatics engineering, STEI prepares students to innovate in cutting-edge technologies, ensuring a strong foundation for careers in the rapidly evolving tech industry." },
  { title: "Fakultas Teknik Industri (FTI)", description: "With a focus on optimizing complex systems and processes, FTI equips graduates with the skills to lead in industries such as manufacturing, logistics, and operations, driving efficiency and innovation." },
  { title: "Fakultas Teknik Mesin dan Dirgantara (FTMD)", description: "FTMD combines rigorous mechanical and aerospace engineering training, producing graduates capable of advancing technologies in sectors like automotive, aviation, and energy." },
  { title: "Sekolah Ilmu Teknologi Hayati (SITH)", description: "SITH offers a comprehensive education in life sciences and biotechnology, positioning its graduates to contribute to advancements in healthcare, agriculture, and environmental management." },
  { title: "Fakultas Ilmu dan Teknologi Kebumian (FITB)", description: "FITB specializes in earth sciences and technology, preparing students for impactful careers in geology, meteorology, and environmental conservation, crucial for sustainable development." },
  { title: "Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)", description: "FMIPA provides a solid foundation in mathematics and natural sciences, fostering analytical and problem-solving skills that are essential in research, education, and industry." },
  { title: "Fakultas Seni Rupa dan Desain (FSRD)", description: "FSRD nurtures creativity and innovation in visual arts and design, preparing students for dynamic careers in the creative industries, from digital media to product design." },
  { title: "Fakultas Teknik Pertambangan dan Perminyakan (FTTM)", description: "FTTM is at the forefront of mining and petroleum engineering education, equipping students with the expertise to tackle challenges in energy production and resource management." },
  { title: "Fakultas Teknik Sipil dan Lingkungan (FTSL)", description: "FTSL trains engineers in civil and environmental engineering, focusing on sustainable infrastructure development and environmental protection, crucial for urban planning and construction." },
  { title: "Sekolah Arsitektur, Perencanaan dan Pengembangan Kebijakan (SAPPK)", description: "SAPPK offers an interdisciplinary approach to architecture, planning, and policy development, preparing students to create sustainable and innovative built environments." },
  { title: "Sekolah Bisnis dan Manajemen (SBM)", description: "SBM provides a world-class business education, focusing on leadership, entrepreneurship, and innovation, essential for success in the global business landscape." },
  { title: "Sekolah Farmasi (SF)", description: "SF offers a rigorous curriculum in pharmaceutical sciences, preparing graduates for careers in healthcare, research, and the pharmaceutical industry, contributing to public health and well-being." },  
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
                    <Link href="/authentication">Sign In</Link>
                    <Link href="/settings">Settings</Link>
                    <button onClick={() => signOut({ callbackUrl: "/" })}>Log Out</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>


        
        <div className="tagline-container">
          <div className="tagline-text">
            <div>
              <p className="welcome-text ">Welcome to,</p>
            </div>
            <div>
              <p className="app-name">ProspeXplore</p>
            </div>
            <div>
              <p className="app-description">
                Welcome to Prospexplore, your gateway to meaningful career insights through our comprehensive tracer study platform. Discover the paths of our graduates and explore endless possibilities for your own professional journey!</p>
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
      <h1 className='font-bold text-poppins text-7xl pb-10 flex items-center justify-center text-[#1A3594]' style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.25)" }}>Faculties</h1>
        <div className="flex flex-wrap max-w-screen-lg mx-auto">
          <div className="w-full px-4 md:w-1/2 flex flex-col items-center">
            <p className="text-sm text-[#1A3594] mb-10 xl:text-md text-left w-full">
            Bandung Institute of Technology (ITB) is proud to present 12 outstanding faculties, each renowned for academic excellence and career-focused education.
            These faculties offer a diverse range of programs designed to equip students with the skills and knowledge needed to excel in today’s dynamic job market.
            From engineering to the arts, ITB’s faculties prepare students for rewarding careers, fostering creativity, innovation, and leadership.
            Discover your future at ITB, where education meets opportunity, and career prospects are limitless.
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
            <SwiperSlide key={index} className='text-black'
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
          <p>Discover your true academic passion with our comprehensive interest assessment. This tailored test evaluates your preferences across key areas including favorite subjects, primary interests, standout skills, ideal work environments, personality type, and learning style. By analyzing these crucial factors, we provide personalized recommendations to help you identify the most suitable faculty and academic programs that align with your unique profile and aspirations. </p>
        </div>
        <div className="tes-minat-fakta">
          <div className="tes-minat-fakta-desc">
            <div className="tes-minat-fakta-desc-judul">
              <p>What Model do We Use?</p>
            </div>
            <p>Our assessment utilizes a sophisticated multi-dimensional analysis model that combines the Big Five personality traits, and modern learning style frameworks. This integrated approach ensures a holistic evaluation of your interests, aptitudes, and preferences. By correlating your responses with extensive data on academic programs and career outcomes, our model provides highly accurate and personalized faculty recommendations, guiding you towards educational paths where you&apos;re most likely to thrive and succeed. </p>
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
