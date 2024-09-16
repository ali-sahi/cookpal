import { Link } from "react-router-dom";

interface Recipe {
  id: number;
  name: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

const ImageCard = ({
  id,
  name,
  image,
  rating,
  reviewCount,
  prepTimeMinutes,
  cookTimeMinutes,
  mealType,
}: Recipe) => {
  return (
    <div>
      <Link to={`/recipe/${id}`}>
        <img src={image} alt="menu-img" className="menu__img" />
      </Link>
      <div className="menu__header ">
        <h2>{name}</h2>
        <span className="menu__review">Review:{reviewCount}</span>
      </div>
      <div className="menu__footer">
        <div className="menu__time">
          ⏱ {prepTimeMinutes + cookTimeMinutes} minutes
        </div>
        <div className="menu__type">
          <h2>{mealType[0]}</h2>

          <span>
            {Array(Math.floor(rating))
              .fill(0)
              .map((_, index) => {
                return <i key={index}>★</i>;
              })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
