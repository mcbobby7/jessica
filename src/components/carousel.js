import makeCarousel from 'react-reveal/makeCarousel';
import React from 'react';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from 'styled-components';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

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
        <Slide right>
          <div>
          <img style={{width: '100%', height: '100%'}} src="assets/img/jessy6.jpg" alt="img" />
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
          <img style={{width: '100%', height: '100%'}} src="assets/img/jessy4.jpg" alt="img" />
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
          <img style={{width: '100%', height: '100%'}} src="assets/img/jessy5.jpg" alt="img" />
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
          <img style={{width: '100%', height: '100%'}} src="assets/img/jessy7.jpg" alt="img" />
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
          <img style={{width: '100%', height: '100%'}} src="assets/img/jessy8.jpg" alt="img" />
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
          <img style={{width: '100%', height: '100%'}} src="assets/img/jessy9.jpg" alt="img" />
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
          <img style={{width: '100%', height: '100%'}} src="assets/img/jessy10.jpg" alt="img" />
            <p>Slide Description</p>
          </div>
        </Slide>
      </Carousel>
      );
    }
  }

  export default Carousel;