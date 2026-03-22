export const capitalizeString = (word: string) => {
  const lowerCaseStr = word.toLowerCase();

  return lowerCaseStr[0].toUpperCase() + lowerCaseStr.slice(1);
};
