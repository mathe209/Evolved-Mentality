import Navbar from "../componets/navbar";
import Socials from "../componets/socials";
import MentoForm from "../componets/mentoForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Helmet } from "react-helmet-async";
export default function MENtorship() {
  const images = [
    "/mentorship1.jpg",
    "/mentorship2.jpg",
    "/mentorship4.jpg"
  ];
  const images1 = [
    "/mentorship1.jpg",
    "/mentorship2.jpg",
    "/mentorship4.jpg",
    "/mentorship5.jpg",
    "/mentorship6.jpg",
    "/mentorship7.jpg",
    "/mentorship8.jpg"
  ];

  return (
    <>
        {/*Search Engine Optimization */}
        <Helmet>
        <title>Mentorship | Evolved Mentality</title>
        <meta name="description" content="Join our MENtality Mentorship Program focused on male mental health, growth, and community support." />
        <meta name="keywords" content="mentorship, men's health, mental health, Evolved Mentality, depression, GBV, support, South Africa" />
        <meta property="og:title" content="Mentorship | Evolved Mentality" />
        <meta property="og:description" content="A safe space and growth community for young men through mentorship." />
        <meta property="og:image" content="/mentorship-cover.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Navbar />
      <div className="container mx-auto mt-9 mb-4 p-5 rounded-xl bg-gradient-to-r from-black to-gray-800 text-white justify-center"> 
        <h1 className="text-4xl font-extrabold mb-4 pt-4">MENTORSHIP</h1>
        <hr/>
        <p className="text-xl mb-6 mt-4">
          Welcome to the MENtality Mentorship Program.
        </p>
      </div>

      <div className="container mx-auto mb-5 p-2 rounded-xl bg-gradient-to-l from-black to-gray-800 text-lg">
        <ul className="pl-5 space-y-1">
          <li>Substance abuse and GBV</li>
          
          <li>Sexual health in men</li>
          <li>Depression and mental health</li>
          <li>Spirituality</li>
          <li>Inclusivity and attitudes toward the LGBTQ+ community</li>
          <li>Being future-focused as a man today</li>
          <li>Challenges of navigating fatherhood</li>
        </ul>
      </div>

      <div className="mx-auto">
        {/* Carousel for small screens */}
        <div className="block sm:hidden justify-center">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            modules={[Autoplay]}
          >
            {images1.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`mentorship-${idx}`}
                  className="images rounded-lg mx-auto"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for larger screens */}
        <div className="hidden sm:flex gap-9 justify-center">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              className="images rounded-lg"
              alt={`mentorship-${idx}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <h2 className="text-3xl font-extrabold mb-4 mt-4 text-center justify-center">Become a mentor/mentee</h2>
      <MentoForm />
      <Socials />
    </>
  );
}
