import * as React from 'react';

const width = 5000;
const height = 15000;

const lineLength = 300;
const strokeWidth = 14;
const lines = width * height / 650 / lineLength;
console.log(lines);

function getRandomCoord({ x, y, direction }) {
  let distance;
  let newDirection;
  let x1 = -1;
  let y1 = -1;
  let counter = 0;
  while (x1 <= strokeWidth || x1 >= (width - strokeWidth) || y1 <= strokeWidth || y1 > (height - strokeWidth)) {
    if (counter++ > 10) {
      // Too difficult, we're in a tough corner...
      return { x, y, direction};
    }
    distance = (Math.floor(Math.random() * lineLength)) + 20;
    distance -= distance % strokeWidth;
    newDirection =  direction + Math.floor(Math.random() * 4) + 6;
    newDirection %= 8;
    switch (newDirection) {
      case 0:
        x1 = x;
        y1 = y - distance;
        break;
      case 1:
        x1 = x + distance;
        y1 = y - distance;
        break;
      case 2:
        x1 = x + distance;
        y1 = y;
        break;
      case 3:
        x1 = x + distance;
        y1 = y + distance;
        break;
      case 4:
        x1 = x;
        y1 = y + distance;
        break;
      case 5:
        x1 = x - distance;
        y1 = y + distance;
        break;
      case 6:
        x1 = x - distance;
        y1 = y;
        break;
      case 7:
        x1 = x - distance;
        y1 = y - distance;
        break;
      default:
    }
  }
  return { x: x1, y: y1, direction: newDirection };
}

const Background = (props) => {
  const pattern = [];
  for (let i=0; i < lines; i += 1) {
    const coords = [];
    let x0 = Math.random() * width;
    x0 -= x0 % strokeWidth;
    let y0 = Math.random() * height;
    y0 -= y0 % strokeWidth;
    let direction0 = Math.floor(Math.random() * 8);
    for (let i=0; i < 8; i += 1) {
      const { x, y, direction } = getRandomCoord({ x: x0, y: y0, direction: direction0 });
      coords.push(`${x},${y}`);
      x0 = x;
      y0 = y;
      direction0 = direction;
    }
    const path = `M${coords.join('L')}`;
    pattern.push(path);
  }
  const d = pattern.join(' ');
  const { children, location, pageContext, pageResources, params, path, serverData, uri, ...rest } = props;
  console.log({ props });

  const rulerLines = [];
  const adjust = strokeWidth / 2;
  for (let i=0; i < width; i += strokeWidth) {
    rulerLines.push(<line x1={i + adjust} x2={i + adjust} y2={height + adjust} />);
  }
  for (let i=0; i < height; i += strokeWidth) {
    rulerLines.push(<line x2={width} y1={i + adjust} y2={i + adjust} />);
  }

  const style = `
    line {
      stroke-width: 0.5px;
      stroke: var(--color-nav-background);
      stroke-opacity: 0.2;
    }
  `;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid slice"
      {...rest}
    >
      <style>{style}</style>
      {rulerLines}
      <path fill="none" stroke="#010259" strokeWidth={strokeWidth} vectorEffect="non-scaling-stroke" strokeLinecap="square" d={d} />
      <path fill="none" stroke="white" strokeWidth="1px" vectorEffect="non-scaling-stroke" shapeRendering="auto" d={d} />
      <circle fill="white" r="2">
        <animateMotion dur={`${width * height / 50000}s`} repeatCount="indefinite" path={d} />
      </circle>
    </svg>
  )
};

export default Background;
