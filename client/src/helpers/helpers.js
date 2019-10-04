// function to convert % of piechart to x & y coordinates
const getSegmentCoords = percent => {
  const xCoord = Math.cos(2 * Math.PI * percent);
  const yCoord = Math.sin(2 * Math.PI * percent);

  return [xCoord, yCoord];
};

const createSVGPath = segments => {
  let percentOfTotal = 0;
  const paths = [];
  segments.forEach(segment => {
    // Get starting coords
    const [startXCoord, startYCoord] = getSegmentCoords(percentOfTotal);
    percentOfTotal += segment.percent;
    //Get ending coords
    const [endXCoord, endYCoord] = getSegmentCoords(percentOfTotal);
    //generate path data
    const d = `M ${startXCoord} ${startYCoord} A 1 1 0 0 1 ${endXCoord} ${endYCoord}`;
    console.log(d);

    paths.push(d);
    console.log(paths);
  });
  return paths;
};

console.log(createSVGPath([{ percent: 0.1 }, { percent: 0.1 }]));
