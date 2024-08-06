import React from 'react';
import './App.css';

const links = (component) => {
  if (component === 'Rarr') {
    window.location.href = '/rarr';
  } else if (component === 'Arr') {
    window.location.href = '/arr';
  }
};

const Rarr = () => {
  return (
    <div>
      <ul className="ul">
        <li>North</li>
        <li>East</li>
        <li>West</li>
        <li>South</li>
      </ul>
    </div>
  );
};

const Arr = () => {
  return (
    <div>
      <p>North news, East News, West News, South News</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <div>
        <Arr />
        <Rarr />
      </div>
      <button onClick={() => links('Arr')}>
        Array
      </button>
      <br />
      <br />
      <button onClick={() => links('Rarr')}>
        Refresh Array
      </button>
    </div>
  );
};

export default App;