import React, { useState } from 'react';
import SingleColor from './SingleColor';
import RgbToHex from './utils/RgbToHex';

import Values from 'values.js';

const App = () => {
  const [color, setColor] = useState('#f09090');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f09090').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const discoSelector = () => {
    let r = Math.floor(Math.random() * 256) + 1;
    let g = Math.floor(Math.random() * 256) + 1;
    let b = Math.floor(Math.random() * 256) + 1;

    let randomColor = [r, g, b];

    console.log(randomColor);

    const randomHex = RgbToHex(...randomColor);
    setColor(randomHex);
    console.log(color);
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f09090'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
          <button className='btn' onClick={discoSelector}>
            disco
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
};

export default App;
