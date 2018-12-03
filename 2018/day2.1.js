let input = `
  uqcipadzntnheslgvjjozmkfyr
  uqcipadzwtnhexlzvxjobmkfkr
  ...
  uqcipadzwtnhetcgvxgobmkfyr
`;

function countChars(str) {
  return str.split('').reduce((m,c) => {
    if (!m.hasOwnProperty(c)) {
      m[c] = 0;
    }
    m[c]++;
    return m;
  }, {});
}

let counts = input.trim().split('\n')
  .map(c => c.trim())
  .map(countChars)
  .reduce((m,c) => {
    let charCount = Object.values(c).filter(v => v === 2 || v === 3);
    if (charCount.includes(2)) m.twos++;
    if (charCount.includes(3)) m.threes++
    return m;
  }, {
    twos: 0,
    threes: 0,
  });

let twoCount = counts.twos;
let threeCount = counts.threes;

console.log({ twoCount, threeCount, total: threeCount * twoCount });
