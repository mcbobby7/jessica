import React from 'react';
import './App.css';
import Carousel from './components/carousel';
import Spin from 'react-reveal/Spin';




function App() {
  return (
    <div className="App">
      {/* <Spin> */}
        <h2 className="name"><Spin>JESSICA</Spin></h2>
      {/* </Spin> */}
      <Carousel /> 
    </div>
  );
}

export default App;
