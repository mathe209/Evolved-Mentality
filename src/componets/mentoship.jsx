import FeatureCards from "./featureCards"
export default function Mentoship(){
    let features = [{
        title: "MENTORSHIP",
        desc: "Our is set to kickstart soon aiming to to adopt learners from schools in townships."
    }]
    return(
        <>
        <div className="container m-3 p-3 rounded-xl hero bg-gradient-to-r from-black to-gray-800 text-white">
            <h3 className="text-4xl font-extrabold mb-4">Objectives</h3>
            <section className="mb-4 text-lg">                
                <ul className="p-4 space-y-3">
                    <li>Caltivating a safe space and a community tha natures and positively shapes minds of young boys and men.</li>
                    <li>Hosting and attending webinars, workshops, bootcamps, and manhood indabas and engaging subject experts.</li>
                    <li>Teaching and advocating for the significance of mental health. Especially pertaining African men.</li>
                    <li>Provides knowledge-sharing and mentorship.</li>
                </ul>
                
            </section>
        </div>
        </>
    )
}