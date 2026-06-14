import { useState } from "react";
import ActivityCard from "../components/ActivityCard";
import { activities } from "../data/activities";
import mapImage from "../assets/images/map.webp";


function Activities() {
  const [selectedCategory, setSelectedCategory] = useState("Alla");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMap, setShowMap] = useState(false);

  const categories = ["Alla", "Promenad", "Träning", "Café", "Event"];

  const filteredActivities = activities.filter((activity) => {
    const matchesCategory =
      selectedCategory === "Alla" ||
      activity.category === selectedCategory;

    const matchesSearch =
      activity.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      activity.location
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main id="main-content">
      <section className="page-hero">
        <h1>Aktiviteter</h1>
        <p>Hitta promenader, träning, caféträffar och events för dig och din hund. </p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Sök aktiviteter..."
            aria-label="Sök aktiviteter"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

          <button type="button">Sök</button>
        </div>
       
        <button className="location-button" type="button"
          onClick={() => setShowMap(!showMap)}
        >
          <svg class="m-1 text-emerald-800" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Hitta nära mig
        </button>

        {showMap && (
          <section className="map-section">
            <div className="map-placeholder">
              <img
                src={mapImage}
                alt="Karta över aktiviteter nära användaren"
                className="map-image"
                loading="lazy"
              />

              <button className="map-pin pin-one" type="button">
                📍 Promenadgrupp
                <span className="pin-tooltip">
                  Hagaparken • 2 km bort
                </span>
              </button>

              <button className="map-pin pin-two" type="button">
                ☕ Hundcafé
                <span className="pin-tooltip">
                  Vasastan • 3 km bort
                </span>
              </button>
            </div>

            <div className="nearby-list">
              <article>
                <h3>Promenadgrupp</h3>
                <p>2 km bort • Hagaparken</p>
              </article>

              <article>
                <h3>Hundcafé</h3>
                <p>3 km bort • Vasastan</p>
              </article>
            </div>
          </section>
        )}

      </section>

      <section className="activities-page-section">
        <div className="filter-bar" aria-label="Filtrera aktiviteter">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                selectedCategory === category ? "filter-active" : ""
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredActivities.length > 0 ? (
          <div className="activities-grid">
            {filteredActivities.map((activity) => (
              <ActivityCard
                key={activity.id}
                title={activity.title}
                text={`${activity.location} • ${activity.distance} — ${activity.description}`}
                image={activity.image}
                link={`/activities/${activity.id}`}
              />
            ))}
          </div>
        ) : (
          <p className="no-results">
            Inga aktiviteter matchar din sökning. Testa ett annat sökord eller välj en annan kategori.
          </p>
        )}
      </section>
    </main>
  );
}

export default Activities;