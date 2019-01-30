/* eslint-disable array-callback-return */
const getAverageRatings = (ratings) => {
  let sum = 0;
  let numberofElements = 0;
  ratings.map((child) => {
    sum += child.stars;
    numberofElements += 1;
  });
  return (sum / numberofElements);
};

export default getAverageRatings;
