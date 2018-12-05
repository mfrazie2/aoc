let input = `
  #1 @ 287,428: 27x20
  #2 @ 282,539: 20x10
  ...
  #1397 @ 888,761: 25x24
`;

let cleanData = input.trim()
  .replace(/\@|\:/g, '')
  .split('\n')
  .map(s => s.trim().split(/\s+/));

let surfaceObj = {},
    claimsObj = {};

cleanData.forEach(([claimNum, xY, wH]) => {
  let [x, y] = getXY(xY);
  let [w, h] = getWH(wH);
  makeClaim(surfaceObj, x, y, w, h, claimNum, claimsObj);
});

let overlaps = Object.values(surfaceObj).filter(o => o.v === 2).length;

console.log('Part 1:', overlaps);

let claimNums = Object.keys(claimsObj);

for (let claim of claimNums) {
  if (claimsObj[claim].every(o => o.v === 1)) {
    console.log('Part 2:', claim);
  }
}

/* HELPERS */
function getXY(str) {
  return str.split(',').map(Number);
}

function getWH(str) {
  return str.split('x').map(Number);
}

function makeClaim(surface, x, y, w, h, claimNum, claimsObj) {
  let currX = x,
      currY = y,
      MAX_X = x + w,
      MAX_Y = y + h,
      claimArr = [];
  
  while (currY < MAX_Y) {
    while (currX < MAX_X) {
      togglePoint(surface, buildCoord(currX, currY));
      claimArr.push(surface[buildCoord(currX, currY)]);
      currX++;
    }
    currX = x;
    currY++;
  }
  claimsObj[claimNum] = claimArr;
}

function togglePoint(surface, coord) {
  if (!surface.hasOwnProperty(coord)) {
    surface[coord] = { v: 1 };
  } else {
    surface[coord].v = 2 ;
  }
}

function buildCoord(x, y) {
  return `${x},${y}`;
}
