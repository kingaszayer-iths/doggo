import { Link } from "react-router-dom";

type ActivityCardProps = {
    title: string;
    text: string;
    image: string;
    link: string;
};

function ActivityCard({
    title,
    text,
    image,
    link,
}: ActivityCardProps) {
    return (
        <article className="activity-card">
            <img
                src={image}
                alt=""
                // alt={title}
                className="card-image" 
                loading="lazy"
            />

            <div className="card-content">
                <h2>{title}</h2>
                <p>{text}</p>

                <Link className="card-button" to={link}>
                    Läs mer
                </Link>
            </div>
        </article>
    );
}

export default ActivityCard;