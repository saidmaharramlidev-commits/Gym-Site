import { useNavigate } from "react-router-dom";
import planPic1 from "../assets/planPic1.jpg"
import planPic2 from "../assets/planPic3.webp"
import planPic3 from "../assets/planPic4.jpg"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useEffect } from "react";



function Plans() {

    const navigate = useNavigate()

    useEffect(() => {
        const plans = document.getElementById("planContainer");


        let observerPlan = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("slideBottomToTop");
            observerPlan.unobserve(entry.target);
        });

        if (plans) {
            observerPlan.observe(plans);
        }

        return () => observerPlan.disconnect();
    }, []);



    return (
        <div id="mainPlans">
            <h1 id="headerOfPlans">Membership Plans</h1>
            <div id="planContainer">
                <div className="plan">
                    <div className="img-wrapper">
                        <img src={planPic1} />
                    </div>
                    <div id="elementsOfPlan-wrapper">
                        <h1 style={{ color: "white" }}>Basic</h1>
                        <li>Cardio & free weights</li>
                        <li>Standard machines</li>
                        <li>Locker room access</li>
                        <li>Fixed hours (daytime)</li>
                    </div>
                    <div className="price">
                        <span>-- 30$ --</span>
                    </div>
                    <div className="planBtn">
                        <button onClick={() => navigate("contact")}>
                            Get in touch
                            <div id="arrow">
                                <ArrowOutwardIcon />
                            </div>
                        </button>
                    </div>

                </div>
                <div className="plan middlePremium">
                    <div className="img-wrapper">
                        <img src={planPic3} />
                    </div>
                    <div id="elementsOfPlan-wrapper">
                        <h1 style={{ color: "white" }}>Standard</h1>
                        <li>All machines & zones</li>
                        <li>Group classes included</li>
                        <li>1 personal training session / month</li>
                        <li>Monthly progress check</li>
                        <li>Flexible hours</li>
                    </div>
                    <div className="price">
                        <span>-- 60$ --</span>
                    </div>
                    <div className="planBtn">
                        <button onClick={() => navigate("contact")}>
                            Get in touch
                            <div id="arrow">
                                <ArrowOutwardIcon />
                            </div>
                        </button>
                    </div>

                </div>
                <div className="plan">
                    <div className="img-wrapper">
                        <img src={planPic2} />
                    </div>
                    <div id="elementsOfPlan-wrapper">
                        <h1 style={{ color: "white" }}>Premium</h1>
                        <li>Unlimited group classes</li>
                        <li>Sauna & recovery zone</li>
                        <li>Dedicated personal trainer</li>
                        <li>Nutrition guidance</li>
                        <li>24/7 unlimited access</li>
                    </div>
                    <div className="price">
                        <span>-- 100$ --</span>
                    </div>
                    <div className="planBtn">
                        <button onClick={() => navigate("contact")}>
                            Get in touch
                            <div id="arrow">
                                <ArrowOutwardIcon />
                            </div>
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Plans