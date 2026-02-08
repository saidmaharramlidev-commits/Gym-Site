import footerPic from "../assets/footer.jpg"
import NorthWestIcon from '@mui/icons-material/NorthWest';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';



function Footer() {
    return (
        <div id="mainFooter">
            <img src={footerPic} />
            <div id="headerOfFooter">
                <h1 >Ready to unlock your potential?</h1>
                <h3 style={{ color: "silver" }}>Train smarter. Get stronger. Stay ahead.</h3>
                <div id="footer-cta">
                    <button >
                        <div id="footerArrow">
                            <NorthWestIcon />
                        </div>
                        I'm Ready
                    </button>
                </div>

            </div>
            <div id="bottomOfFooter">
                <div id="socialMedia">
                    <div className="mediaLink">
                        <InstagramIcon />
                        <a href="https://www.instagram.com/">Instagram</a>
                    </div>
                    <div className="mediaLink">
                        <FacebookIcon />
                        <a href="https://www.facebook.com/">Facebook</a>
                    </div>
                    <div className="mediaLink">
                        <XIcon />
                        <a href="https://www.x.com/">X</a>
                    </div>
                    <div className="mediaLink">
                        <YouTubeIcon />
                        <a href="https://www.youtube.com/">Youtube</a>
                    </div>

                </div>
                <div id="footerText">
                    <h4>Take your fitness journey to the next level with personalized training plans, expert guidance from our experienced coaches, and a supportive environment designed to help you achieve real results.</h4>
                </div>

            </div>

        </div>
    )
}

export default Footer