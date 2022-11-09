const foodComparisonPercent = (num, food) => {
  return Math.round((Math.round((num / food) * 100) / 100) * 100);
};

const foodComparison = (num, food) => {
  return Math.round((num / food) * 10) / 10;
};

const calorieData = (num, calories) => {
  const calorieRatio = Math.round((num / calories) * 100) / 100;
  const wholeNumber = Math.floor(calorieRatio);
  const fraction = Math.round((calorieRatio - wholeNumber) * 100) / 100;

  return { calorieRatio, fraction };
};

export { foodComparisonPercent, foodComparison, calorieData };
