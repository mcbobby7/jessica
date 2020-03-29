import makeCarousel from 'react-reveal/makeCarousel';
import React from 'react';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from 'styled-components';

const Container = styled.div`
  border: 1px solid red;
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

// const Courosel = () => {

//     const CarouselUI = ({ children }) => <Container>{children}</Container>;
//     const Carousel = makeCarousel(CarouselUI);
    
//     render (
      
//     );
// }

// export default Courosel;

class Carousel extends React.Component {
    render () {
        const CarouselUI = ({ children }) => <Container>{children}</Container>;
    const Carousel = makeCarousel(CarouselUI);
      return (
        <Carousel defaultWait={1000} /*wait for 1000 milliseconds*/ >
        <Slide right>
          <div>
          <img style={{width: '100%', height: '100%'}} src="assets/img/jessy.jpg" alt="img" />
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
          <img style={{width: '100%', height: '100%'}} src="assets/img/jessy2.jpg" alt="img" />
            <p>Slide Description</p>
          </div>
        </Slide>
      </Carousel>
      );
    }
  }

  export default Carousel;