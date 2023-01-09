export const getTitleCase = (str: string) => {
  if (!str) return '';

  const words = str.split(' ');

  return words
    .map((word: string) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export const getURLParamsString = (str: string) => {
  if (!str) return '';

  return str.replace(/[^a-zA-Z ]/g, '').toLowerCase();
};
