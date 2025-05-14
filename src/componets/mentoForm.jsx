export default function MentoForm(){
    return(
        <>
        <div className="container  rounded-xl text-white justify-center mb-5 pb-5">
            <form className="flex flex-col gap-4">
                <div className="flex gap-4 justify-center">
                    <input type="radio" name="mentoType" value="mentor" id="mentor"/>
                    <label htmlFor="mentor">Mentor</label>
                    <input type="radio" name="mentoType" value="mentee" id="mentee"/>
                    <label htmlFor="mentee">Mentee</label>
                </div>
                <label className="flex flex-col gap-2">
                    Full Name
                    <input type="text" name="name" className="rounded-sm text-black p-2"/>
                </label>
                <label className="flex flex-col gap-2">
                    Email
                    <input type="email" name="email" className="rounded-md text-black p-2"/>
                </label>
                <label className="flex flex-col gap-2">
                    Phone Number
                    <input type="tel" name="phone" className="rounded-md text-black p-2"/>
                </label>
                <label className="flex flex-col gap-2">
                    Message
                    <textarea name="message" rows="4" className="rounded-md p-2 text-black" placeholder="Please enter the areas you wish to mentor or get mentorship in"></textarea>
                </label>
                <button type="submit" value="Submit" className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300">Submit</button>
            </form>
        </div>
        </>
    )
}