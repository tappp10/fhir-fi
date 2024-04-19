import * as React from 'react';
import Background from './background';

const CreateBackground = () => {

  const [width, setWidth] = React.useState(1920);
  const [height, setHeight] = React.useState(1080);
  const [animated, setAnimated] = React.useState(true);
  const [dimmed, setDimmed] = React.useState(false);
  const [, refresh] = React.useState(undefined);

  return (
    <article id="playground">
      <h1>Create FHIR Demo 2024 Backgrounds!</h1>
      <form>
        <label>
          Width: <input type="number" name="width" value={width} onChange={(e) => setWidth(e.target.value)} />
        </label>
        <label>
          Height: <input type="number" name="height" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <label>
          Animated: <input type="checkbox" name="animated" checked={animated} onChange={(e) => setAnimated(e.target.checked)} />
        </label>
        <label>
          Dimmed: <input type="checkbox" name="dimmed" checked={dimmed} onChange={(e) => setDimmed(e.target.checked)} />
        </label>
        <button type="button" onClick={() => refresh({})}>Redraw!</button>
        <button type="button" onClick={() => {}}>Save!</button>
      </form>
      <Background key={`${width}x${height}-${animated}`} width={width} height={height} animated={animated} dimmed={dimmed} />
    </article>
  )
};

export default CreateBackground;
