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

                <Link className="endPoints" to={"/plans"}>Plans</Link>
                <Link className="endPoints" to={"/about"}>About</Link>
                <Link className="endPoints" to={"/contact"}>Contact</Link>
                <Link className="endPoints" to={"/reviews"}>Reviews</Link>
                <Link className="brandName" to={"/"}>My Gym</Link>
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