import { useState } from "react";
import Navbar from "../componets/navbar";
import Socials from "../componets/socials";
const eventImages = [
  { src: "/event1.jpg", caption: "Youth Mentorship Camp 2023" },
  { src: "/event2.jpg", caption: "Mental Health Awareness Day" },
  { src: "/event3.jpg", caption: "Fatherhood Workshop" },
  { src: "/event4.jpg", caption: "Community Clean-up Drive" },
  { src: "/event62.jpg", caption: "LGBTQ+ Inclusivity Talk" },
  { src: "/event6.jpg", caption: "Spiritual Retreat" },
];

export default function EventGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
    <Navbar/>
    <div className="p-6 bg-gradient-to-r from-black to-gray-800 min-h-screen mx-auto m-5 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-6">Event Highlights</h2>
      <hr/>

      <p className="p-3">
        We recently attended an event called EMPOWAMEN Annual Summit held at Randburg, Johannesburg in May.<br/>
        This event saw various stakeholders, including subject experts on matters like mental and physical health, influential leaders like the Minister of Social Development, business leaders and other high standing individuals come together.
      </p>
      <p className="p-3">
        The event allowed us to bring our members who are mentors, facilitators and general volunteers to get empowered with knowledge and expertise to continue the ripple effect of making changes in their respective communities.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto mb-4">
        {eventImages.map((img, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer group"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="rounded-xl w-full h-64 object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 text-sm w-full text-center text-white">
              {img.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-w-full max-h-[80vh] rounded-lg"
            />
            <p className="text-white text-center mt-2">{selectedImage.caption}</p>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-60 rounded-full px-3 py-1 hover:bg-opacity-80"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      <Socials/>
    </div>
    </>
  );
}
