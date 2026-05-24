import { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { articles } from "../data/articles";

function Tips() {
  const [selectedCategory, setSelectedCategory] = useState("Alla");

  const categories = ["Alla", "Träning", "Vardag", "Hundvänliga platser"];

  const filteredArticles =
    selectedCategory === "Alla"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <main id="main-content">
      <section className="page-hero">
        <h1>Tips & inspiration</h1>

        <p>Artiklar, guider och inspiration för ett aktivt och roligt hundliv. </p>
      </section>

      <section className="tips-section">
        <div className="tips-categories" aria-label="Filtrera artiklar">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={selectedCategory === category ? "filter-active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="tips-grid">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              category={article.category}
              description={article.description}
              image={article.image}
              link={`/tips/${article.id}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Tips;
