import Hero from "../componets/Hero"
import Navbar from "../componets/navbar"
import FeatureCards from "../componets/featureCards"
import Mentoship from "../componets/mentoship"
import Socials from "../componets/socials"
let features = [
    { title: 'Inspiration', desc: 'We aim to serve as the source of inspiration and encouragement to the young men with no exemplary, positive role models within their communities.' },
    { title: 'Integrity', desc: "We believe in the direct demonstration and embodiment of socially astute virtues. We do not only Talk the Talk, but more-so we walk the walk too! " },
    { title: 'Insight', desc: 'We believe knowledge is indeed power, but precise understanding empowers us all to act proactively and responsibly.' },
  ];
export default function Home() {
    return (
        <>
            <Navbar/>
            <Hero />
            <FeatureCards features={features}/>
            <Mentoship />
            <Socials/>
        </>
    )
}