import { Link } from "react-router-dom";

type ArticleCardProps = {
    title: string;
    category: string;
    description: string;
    image: string;
    link: string;
};

function ArticleCard({
    title,
    description,
    image,
    link,
}: ArticleCardProps) {
    return (
        <article className="article-card">
            <img
                src={image}
                alt=""
                // alt={title}
                className="article-image"
                loading="lazy"
            />

            <div className="article-content">
                <h2>{title}</h2>
                <p>{description}</p>

                <Link className="card-button" to={link}>
                    Läs artikel
                </Link>
            </div>
        </article>
    );
}

export default ArticleCard;