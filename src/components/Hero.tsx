import Dumbel from "../assets/dumbell.webp"
import { Link } from "react-router-dom"
import NorthWestIcon from '@mui/icons-material/NorthWest';
import { CiMenuFries } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { setNavbar } from "../redux/counterSlice";




function Hero() {
    const dispatch = useDispatch()

    const { isOpenNavbar } = useSelector((state: RootState) => state.counter)
    return (
        <div id="hero">
            <div id="menuDiv" >
                <Link id="brandNameMenu" to={"/"}>My Gym</Link>
                <CiMenuFries onClick={() => dispatch(setNavbar())} id="menuBtn" />
            </div>
            <img src={Dumbel} />
            <div id="navbar" className={isOpenNavbar ? "open" : ""}>

                <a className="endPoints" href="#mainPlans">Plans</a>
                <a className="endPoints" href="#mainAbout" >About</a>
                <a className="endPoints" href="#mainFaq">FAQ</a>
                <a className="endPoints" >Contact</a>
                <a className="brandName" href="#hero" >My Gym</a>
            </div>
            <div id="heroText">
                <h1>"Where strength meets <span>discipline</span>"</h1>
            </div>
            <div id="startBtn-Wrapper">
                <button >
                    <div id="arrow">
                        <NorthWestIcon />
                    </div>
                    Start now
                </button>
            </div>

        </div>
    )
}

export default Hero