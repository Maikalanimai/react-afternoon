import React from 'react';
import './index.css';
import Display from "./Components/Display"

function App() {
  return (
    <div className="App">
      <header><div className='home'>Home</div></header>
      <div className='div-over-main'><main><Display className='information'/></main></div>
    </div>
  );
}

export default App;
