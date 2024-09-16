import { useParams } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { Recipe } from "../../utils/types";

const RecipePage = () => {
  const { id } = useParams();
  const [menuItem, setMenuItem] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchSingleItem = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://dummyjson.com/recipes/${id}`);

      if (!res.ok) {
        throw new Error("Response Error");
      }
      const data: Recipe = await res.json();
      setMenuItem(data);
      setIsLoading(false);
    } catch (error) {
      //
      setIsLoading(false);
      setError(true);
      console.log("failed to fetch recipes", error);
    }
  };

  useEffect(() => {
    fetchSingleItem();
  }, []);

  if (isLoading) return <h2>loading...</h2>;
  if (error) return <h2>there is an error retrieving data</h2>;

  return (
    <section className="menu__detail__section">
      <div className="menu__content">
        <div className="menu__content__header">
          <h2>{menuItem?.name}</h2>
          <p>{menuItem?.instructions}</p>
        </div>

        <div className="menu__content__footer">
          <h2>Ingredients</h2>
          <span className="divider"></span>
          <ul>
            {menuItem?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <img src="/check icon.svg" alt="check-icon" />
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* image */}

      <div className="menu__image">
        <img src={menuItem?.image} alt="img" />
      </div>
    </section>
  );
};

export default RecipePage;
