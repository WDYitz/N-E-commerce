import { stars } from "@/useCases/stars";
import { Star } from "lucide-react";

interface StarsProps {
  rating: number;
}

const Stars = ({ rating }: StarsProps) => {
  const starsRate = stars.createRating(rating);

  return (
    <>
      {starsRate.map((star) => (
        <Star key={star} size={14} className="text-[#8161ff]" fill="#8161ff" />
      ))}
    </>
  );
};

export default Stars;
