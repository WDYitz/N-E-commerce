class Stars {
  constructor() { }

  createRating = (rating: number): number[] => {
    let stars = Array.from({ length: rating }, (_, index) => index + 1);

    if (rating === 0 || rating === undefined || rating === null) {
      stars = Array.from({ length: 5 }, (_, index) => index + 1);
    }

    return stars;
  }
}

export const stars = new Stars();