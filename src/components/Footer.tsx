import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <section className="footer-section">
                    <h2>Doggo</h2>
                    <p>
                        En community skapad för hundälskare som vill hitta aktiviteter,
                        inspiration och hundvänliga platser.
                    </p>
                </section>
                <nav
                    className="footer-section" aria-label="Footer navigation">
                    <h2>Navigation</h2>
                    <Link to="/">Hem</Link>
                    <Link to="/activities">Aktiviteter</Link>
                    <Link to="/tips">Tips & inspiration</Link>
                </nav>
                <section className="footer-section">
                    <h2>Kontakt</h2>
                    <p>kontakt@doggo.se</p>
                    <p>Stockholm, Sverige</p>
                </section>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Doggo. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;