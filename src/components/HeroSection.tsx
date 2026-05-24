import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.webp";

function HeroSection() {
    return (
        <section
            className="hero"
            style={{
                backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.45),
          rgba(0, 0, 0, 0.45)
        ), url(${heroImage})`,
            }}
        >
            <div className="hero-content">
                <h1>Aktiviteter och tips för ett bättre hundliv</h1>
                <p>Upptäck promenadgrupper, möt andra hundägare och hitta inspiration för ett aktivt och lyckling liv tillsammans.</p>

                <Link className="hero-button" to="/activities">
                    Utforska aktiviteter
                </Link>
            </div>
        </section>
    );
}

export default HeroSection;