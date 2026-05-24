import HeroSection from "../components/HeroSection";
import ActivityCard from "../components/ActivityCard";
import walkImage from "../assets/images/walk.webp";
import cafeImage from "../assets/images/cafe.webp";
import trainingImage from "../assets/images/training.webp";

function Home() {
  return (
    <main id="main-content">
      <HeroSection />

      <section className="activities-section">
        <h2>Populära aktiviteter</h2>

        <div className="activities-grid">
          <ActivityCard
            title="Promenadgrupp"
            text="Träffa andra hundägare i ditt område."
            image={walkImage}
            link="/activities"
          />

          <ActivityCard
            title="Hundcafé"
            text="Upptäck hundvänliga caféer nära dig."
            image={cafeImage}
            link="/activities"
          />

          <ActivityCard
            title="Träning"
            text="Tips och aktiviteter för ett aktivt hundliv."
            image={trainingImage}
            link="/activities"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
