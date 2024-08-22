import { Star } from "lucide-react";

interface StarsProps {
  rating: number;
}

const Stars = ({ rating }: StarsProps) => {
  let stars = Array.from({ length: rating }, (_, index) => index + 1);

  if (rating === 0 || rating === undefined || rating === null) {
    stars = Array.from({ length: 5 }, (_, index) => index + 1);
  }

  return (
    <>
      {stars.map((star) => (
        <Star key={star} size={14} fill="#8161ff" />
      ))}
    </>
  );
};

export default Stars;
