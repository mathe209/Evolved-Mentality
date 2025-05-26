import Navbar from "../componets/navbar";
import Socials from "../componets/socials";
import MentoForm from "../componets/mentoForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Helmet } from "react-helmet-async";
export default function MENtorship() {
  const images = [
    "/Evolved-Mentality/mentorship1.jpg",
    "/Evolved-Mentality/mentorship2.jpg",
    "/Evolved-Mentality/mentorship4.jpg"
  ];
  const images1 = [
    "/Evolved-Mentality/mentorship1.jpg",
    "/Evolved-Mentality/mentorship2.jpg",
    "/Evolved-Mentality/mentorship4.jpg",
    "/Evolved-Mentality/mentorship5.jpg",
    "/Evolved-Mentality/mentorship6.jpg",
    "/Evolved-Mentality/mentorship7.jpg",
    "/Evolved-Mentality/mentorship8.jpg"
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
        <p className="text-xl mb-4 mt-4">
          Welcome to the MENtorship Program.
        </p>
        <p>
          Our main objective is to foster professional growth and learning. By blending technology with human connection thoughtfully.
        </p>
      </div>

      <div className="container mx-auto mb-5 p-2 rounded-xl bg-gradient-to-l from-black to-gray-800 text-lg">
        <h1 className="text-2xl text-white font-bold m-3">Capabilities of the MENtorship Program
        <hr className="my-4"/>
        </h1>
        <p>
          <strong>Structured Program</strong>: Clear goals, timelines,and defined outcomes that will be supported by our mentorship learning outcomes and evaluation metrics.
        </p>
        <p>
          <strong>Customization</strong>: Tailored to address specific needs, be it career guidance, industry insights, and personal growth.
        </p>
        <p>
          <strong>Digital Interaction</strong>: Calls, video calls, chat apps and virtual collaboration platforms like GoogleMeet, Teams and Zoom.
        </p>
        <p>
          <strong>Global Reach</strong>: Removes geographical barriers, enabling diverse mentor-mentee pairings.
        </p>
        <p>
          <strong>Flexibility</strong>: Participants set meetings that accommodate different time zones and lifestyles.
        </p>

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
      <img src="/Evolved-Mentality/logo.jpg" alt="logo" className="w-54 h-44 mx-auto mb-4 rounded-xl mt-6"/>

      <MentoForm />
      <Socials />
    </>
  );
}
