import { useState } from "react";

export default function MentoForm() {
  const [mentorType, setMentorType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const AddMentor = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/addMentor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mentorType, name, email, phone, message }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        alert("Mentorship successful!");
        window.location.href = "/";
      } else {
        alert(data.message || "Mentorship failed");
      }
    } catch (error) {
      console.error(error);
      alert("Error during mentorship");
    }
  };

  return (
    <>
      <div className="container rounded-xl text-white justify-center mb-5 pb-5">
        <form id="mentorForm" className="flex flex-col gap-4" onSubmit={AddMentor}>
          <div className="flex gap-4 justify-center">
            <input
              type="radio"
              name="mentorType"
              value="mentor"
              id="mentor"
              checked={mentorType === "mentor"}
              onChange={(e) => setMentorType(e.target.value)}
            />
            <label htmlFor="mentor">Mentor</label>

            <input
              type="radio"
              name="mentorType"
              value="mentee"
              id="mentee"
              checked={mentorType === "mentee"}
              onChange={(e) => setMentorType(e.target.value)}
            />
            <label htmlFor="mentee">Mentee</label>
          </div>

          <label className="flex flex-col gap-2">
            Full Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-sm text-black p-2"
            />
          </label>

          <label className="flex flex-col gap-2">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md text-black p-2"
            />
          </label>

          <label className="flex flex-col gap-2">
            Phone Number
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-md text-black p-2"
            />
          </label>

          <label className="flex flex-col gap-2">
            Message
            <textarea
              name="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-md p-2 text-black"
              placeholder="Please enter the areas you wish to mentor or get mentorship in"
            />
          </label>

          <button
            type="submit"
            value="Submit"
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
