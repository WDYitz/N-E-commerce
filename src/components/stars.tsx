import { services } from "@/useCases/services";
import { Star } from "lucide-react";

interface StarsProps {
  rating: number;
}

const Stars = ({ rating }: StarsProps) => {
  const starsRate = services.createRating(rating);

  return (
    <>
      {starsRate.map((star) => (
        <Star key={star} size={14} className="text-[#8161ff]" fill="#8161ff" />
      ))}
    </>
  );
};

export default Stars;
