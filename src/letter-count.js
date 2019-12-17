export const getLetterCount = str => {
  const letters = str.split("");
  let letterCount = {};

  letters.forEach(letter => {
    if (!letterCount[letter]) return (letterCount[letter] = 1);

    letterCount[letter] += 1;
  });

  return letterCount
};
