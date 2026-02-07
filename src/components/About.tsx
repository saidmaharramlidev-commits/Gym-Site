import aboutPic1 from "../assets/aboutPic1.jpg"
import aboutPic2 from "../assets/aboutPic2.webp"
import aboutPic3 from "../assets/aboutPic3.webp"
import NorthWestIcon from '@mui/icons-material/NorthWest';
import "../css/about.css"


function About() {
    return (
        <div id="mainAbout">
            <div id="headerOfAbout">
                <h1 >About us</h1>
            </div>
            <div id="aboutContainer">
                <div className="left-about">
                    <img src={aboutPic1} alt="" />
                    <div>
                        <h1>What are we?</h1>
                        <h2>“Where strength meets discipline — we build more than muscles, we build lifestyle.”</h2>
                    </div>
                </div>
                <div className="right-about">
                    <img src={aboutPic2} alt="" />
                    <div>
                        <h1>What Makes Us Different?</h1>
                        <li>Personalized programs: Every member trains their way.</li>
                        <li>State-of-the-art equipment: From free weights to premium machines</li>
                        <li>Flexible hours: Train when it fits your life.</li>
                        <li>Community-focused: Supportive, motivating, non-intimidating environment.</li>
                    </div>
                </div>
                <div className="left-about-sec">
                    <img src={aboutPic3} alt="" />
                    <div>
                        <h1>Trainers & Environment</h1>
                        <li>Expert trainers: Certified, experienced, and focused on results.</li>
                        <li>Hands-on guidance: From first session to long-term progress.</li>
                        <li>Premium environment: Clean, modern, and motivating space</li>
                    </div>
                </div>


                <div id="about-cta">
                    <button >
                        <div id="aboutArrow">
                            <NorthWestIcon />
                        </div>
                        Start your journey
                    </button>
                </div>
            </div>


        </div>
    )
}

export default About