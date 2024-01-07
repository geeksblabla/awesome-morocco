export const languages = [
  "All",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "PHP",
  "Other",
] as const;

export const numberToShortString = (number: number) => {
  if (number < 1000) {
    return number.toString();
  }
  return `${(Math.round(number / 100) / 10).toFixed(1)}k`;
};
