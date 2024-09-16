import { useEffect, useState } from "react";
import ImageCard from "../../components/image-card";
import { Recipe } from "../../utils/types";

interface RecipesResponse {
  recipes: Recipe[];
}

const HomePage = () => {
  const [menuData, setMenuData] = useState<RecipesResponse | null>(null);

  const fetchItems = async () => {
    try {
      const res = await fetch("https://dummyjson.com/recipes");
      if (!res.ok) {
        throw new Error("Response Error");
      }
      const data: RecipesResponse = await res.json();

      const limitedData: RecipesResponse = {
        recipes: data.recipes.slice(0, 6),
      };

      setMenuData(limitedData);
    } catch (error) {
      console.log("failed to fetch recipes", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div className="menu-items">
      {menuData?.recipes.map((item) => {
        return <ImageCard {...item} key={item.id} />;
      })}
    </div>
  );
};

export default HomePage;
