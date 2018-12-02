let input = `
  -10
  +6
  ...
  -76214
`;

const values = input.trim()
  .split('\n')
  .map(v => Number(v.trim()));

const result = values.reduce((s,c) => s +c, 0);
