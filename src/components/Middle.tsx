import Stack from "@mui/material/Stack"
import GymPic1 from "../assets/gymPic.jpg"
import GymPic2 from "../assets/gymPic2.jpg"
import GymPic3 from "../assets/gymPic3.webp"
import Divider from "@mui/material/Divider"
import { useEffect } from "react"





function Middle() {

    useEffect(() => {
        const pic1 = document.getElementById("middle-pic-wrapper1");
        const pic3 = document.getElementById("middle-pic-wrapper3");


        let observerPic = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("LeftToRight");
            observerPic.unobserve(entry.target);
        });

        if (pic1) observerPic.observe(pic1);
        if (pic3) observerPic.observe(pic3);

        return () => observerPic.disconnect();
    }, []);

    useEffect(() => {
        const pic2 = document.getElementById("middle-pic-wrapper2");


        let observerPic = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("RightToLeft");
            observerPic.unobserve(entry.target);
        });

        if (pic2) observerPic.observe(pic2);

        return () => observerPic.disconnect();
    }, []);

    useEffect(() => {
        const middleStatistic = document.getElementById("middleStatistic");

        let observerStat = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("slideBottomToTop");
            observerStat.unobserve(entry.target);
        });

        if (middleStatistic) observerStat.observe(middleStatistic);

        return () => observerStat.disconnect();
    }, []);

    return (
        <div id="mainMiddle">
            <div id="mainPics">
                <div id="middle-pic-wrapper1">
                    <img src={GymPic1} alt="" />
                </div>
                <div id="middle-pic-wrapper2">
                    <img src={GymPic2} alt="" />
                </div>
                <div id="middle-pic-wrapper3">
                    <img src={GymPic3} alt="" />
                </div>
            </div>
            <div id="middleText">
                <h1>No shortcuts. No guesswork.</h1>
                <p>Custom gym programs built to help you get stronger, leaner, and more confident—step by step.</p>
            </div>
            <Stack divider={<Divider sx={{ color: "grey", width: "5px" }} orientation="vertical" />} gap={3} id="middleStatistic" direction={"row"}>
                <div id="stat1">
                    <h1>15+</h1>
                    <p>Active Years</p>
                </div>
                <div id="stat2">
                    <h1>150+</h1>
                    <p>Clients transformed</p>
                </div>
                <div id="stat3">
                    <h1>1000+</h1>
                    <p>Active Members</p>
                </div>
            </Stack>

        </div>
    )
}

export default Middle