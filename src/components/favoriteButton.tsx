"use client";
import { Heart } from "lucide-react";
import { useState } from "react";

const FavoriteButton = () => {
  const [favorite, setFavorite] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleFavorite = () => {
    setAnimate(true);
    setFavorite(!favorite);
    setAnimate(false);
  };

  const isFavorite = favorite ? "#8161ff" : "transparent";

  return (
    <Heart
      size={24}
      fill={isFavorite}
      color="#8161ff"
      onClick={handleFavorite}
      className={`cursor-pointer ease-in-out duration-300 transform hover:scale-105 ${animate ? "animate-ping" : ""}`}
    />
  );
};

export default FavoriteButton;
