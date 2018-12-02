let input = `
  -10
  +6
  ...
  -76214
`;

const values = input.trim()
  .split('\n')
  .map(v => Number(v.trim()));

let total = 0;
let setV = new Set([ 0 ]);
let index = 0;

while (true) {
  if (index === values.length) { 
    index = 0;
  }
  total += values[index++];
  if (setV.has(total)) {
    break;
  }
  setV.add(total);
}

console.log({ total });
