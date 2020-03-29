import makeCarousel from 'react-reveal/makeCarousel';
import React from 'react';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

// const img = [
//     'assets/img/jessy.jpg', 
//     'assets/img/jessy2.jpg', 
// ]

class Carousel extends React.Component {
    
    render () {
        const CarouselUI = ({ children }) => <Container>{children}</Container>;
    const Carousel = makeCarousel(CarouselUI);
      return (
        <Carousel defaultWait={1000} /*wait for 1000 milliseconds*/ >
            {this.img.map((img, index) => (
        <Slide right>
        <div>
        <img style={{width: '100%', height: '100%'}} src={img} alt="img" />
          <p>Slide Description</p>
        </div>
      </Slide>
        ))}
        
        {/* <Slide right>
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
        </Slide> */}
      </Carousel>
      );
    }
  }

  export default Carousel;