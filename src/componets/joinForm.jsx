import { useState } from "react";

export default function JoinForm(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [query, setQuery] = useState("")
    const [message, setMessage] = useState("")
    const [memberType, setMemberType] = useState("")
    
    const AddMember = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:8000/addMember", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ memberType, name, email, phone, query, message }),
          });
          const data = await response.json();
          console.log(data);
          if (response.ok) {
            alert("Membership successful!");
            window.location.href = "/";
          } else {
            alert(data.message || "Membership failed");
          }
        } catch (error) {
          console.error(error);
          alert("Error during membership");
        }
      };
        return(
        <>
        <div className="container">
            <h1>Join Us</h1>
            <hr/>
            <p className="text-center mb-4 mt-4">
                Would you like to join us as a member?<br></br>
                Fill out our form below.
            </p>
        </div>
        <div className="container  rounded-xl text-white justify-center mb-5 pb-5">
            <form id="memberForm" className="flex flex-col gap-4" onSubmit={AddMember}>
                <div className="flex gap-4 justify-center">
                    <input id="member" type="radio" name="memberType" value="member" checked={memberType === "member"} onChange={(e) => setMemberType(e.target.value)}/>
                    <label htmlFor="member">Member</label>
                    <input type="radio" name="memberType" value="ally" id="ally" checked={memberType === "ally"} onChange={(e) => setMemberType(e.target.value)}/>
                    <label htmlFor="ally">Ally</label>
                    <input type="radio" name="memberType" value="query" id="query" checked={memberType === "query"} onChange={(e) => setMemberType(e.target.value)}/>
                    <label htmlFor="query">Query</label>
                </div>
                <label className="flex flex-col gap-2">
                    Full Name
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="rounded-sm text-black p-2"/>
                </label>
                <label className="flex flex-col gap-2">
                    Email
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-md text-black p-2"/>
                </label>
                <label className="flex flex-col gap-2">
                    Phone Number
                    <input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-md text-black p-2"/>
                </label>
                <p className="text-center mb-4 mt-4">
                    Would you like to be helped with something more specific?<br></br>
                    Fill out the form and kindly elaborate on what you need help with.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
                    <label className="flex items-center gap-2">
                        <input type="radio" name="query" value="counseling" checked={query === "counseling"} onChange={(e) => setQuery(e.target.value)}/>
                        Counseling
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="query" value="mentorship" checked={query === "mentorship"} onChange={(e) => setQuery(e.target.value)}/>
                        Mentorship
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="query" value="heritage and legacy" checked={query === "heritage and legacy"} onChange={(e) => setQuery(e.target.value)}/>
                        Heritage and Legacy
                    </label>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4 mt-4">
                    <label className="flex items-center gap-2">
                        <input type="radio" name="query" value="training and skills development" checked={query === "training and skills development"} onChange={(e) => setQuery(e.target.value)}/>
                        Training and Skills development
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="query" value="webinar registration" checked={query === "webinar registration"} onChange={(e) => setQuery(e.target.value)}/>
                        Webinar Registration
                    </label>
                    <label className="flex items-center gap-2">
                            <input type="radio" name="query" value="mental wellness programs" checked={query === "mental wellness programs"} onChange={(e) => setQuery(e.target.value)}/>
                        Mental Wellness Programs
                    </label>
                </div>

                <label className="flex flex-col gap-2">
                    Message
                    <textarea name="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} className="rounded-md p-2 text-black" placeholder="Please enter the areas you wish to mentor or get mentorship in"></textarea>
                </label>
                <button type="submit" value="Submit" className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300">Submit</button>
            </form>
            <p>
                If already a member but have a query, messeage us at
            </p>
        </div>
        </>
    )
}