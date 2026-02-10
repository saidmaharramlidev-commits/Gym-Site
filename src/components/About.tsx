import aboutPic1 from "../assets/aboutPic1.jpg"
import aboutPic2 from "../assets/aboutPic2.webp"
import aboutPic3 from "../assets/aboutPic3.webp"
import NorthWestIcon from '@mui/icons-material/NorthWest';
import { useEffect } from "react";
import "../css/about.css"
import { useNavigate } from "react-router-dom";


function About() {

    const navigate = useNavigate()


    useEffect(() => {
        const left1 = document.getElementById("left1");
        const left2 = document.getElementById("left2");


        let observerPic = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("LeftToRight");
            observerPic.unobserve(entry.target);
        });

        if (left1) observerPic.observe(left1);
        if (left2) observerPic.observe(left2);

        return () => observerPic.disconnect();
    }, []);

    useEffect(() => {
        const pic2 = document.getElementById("right1");


        let observerPic = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("RightToLeft");
            observerPic.unobserve(entry.target);
        });

        if (pic2) observerPic.observe(pic2);

        return () => observerPic.disconnect();
    }, []);






    return (
        <div id="mainAbout">
            <div id="headerOfAbout">
                <h1 >About us</h1>
            </div>
            <div id="aboutContainer">
                <div className="left-about" id="left1">
                    <img src={aboutPic1} alt="" />
                    <div>
                        <h1>What are we?</h1>
                        <h2>“Where strength meets discipline — we build more than muscles, we build lifestyle.”</h2>
                    </div>
                </div>
                <div className="right-about" id="right1">
                    <img src={aboutPic2} alt="" />
                    <div>
                        <h1>What Makes Us Different?</h1>
                        <li>Personalized programs: Every member trains their way.</li>
                        <li>State-of-the-art equipment: From free weights to premium machines</li>
                        <li>Flexible hours: Train when it fits your life.</li>
                        <li>Community-focused: Supportive, motivating, non-intimidating environment.</li>
                    </div>
                </div>
                <div className="left-about-sec" id="left2">
                    <img src={aboutPic3} alt="" />
                    <div>
                        <h1>Trainers & Environment</h1>
                        <li>Expert trainers: Certified, experienced, and focused on results.</li>
                        <li>Hands-on guidance: From first session to long-term progress.</li>
                        <li>Premium environment: Clean, modern, and motivating space</li>
                    </div>
                </div>


                <div id="about-cta">
                    <button onClick={() => navigate("contact")} >
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