import { useParams } from "react-router-dom";
import { activities } from "../data/activities";

function ActivityDetails() {
    const { id } = useParams();

    const activity = activities.find(
        (item) => item.id === Number(id)
    );

    if (!activity) {
        return (
            <main id="main-content">
                <p>Aktiviteten kunde inte hittas.</p>
            </main>
        );
    }

    return (
        <main id="main-content">
            <section className="details-hero">
                <img
                    src={activity.image}
                    alt={activity.title}
                    className="details-image"
                    loading="lazy"
                />

                <div className="details-content">
                    <h1>{activity.title}</h1>
                    <p>{activity.location} • {activity.distance}</p>
                    <p>{activity.description}</p>

                    {/* <button type="button">
                    Boka aktivitet
                    </button> */}
                </div>
            </section>
        </main>
    );
}

export default ActivityDetails;