import makeCarousel from 'react-reveal/makeCarousel';
import React from 'react';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

class Carousel extends React.Component {
     img = [
        'assets/img/jessy2.jpg', 
        'assets/img/jessy1.jpg', 
        'assets/img/jessy5.jpg',
        'assets/img/jessy4.jpg',
        'assets/img/jessy9.jpg',
        'assets/img/jessy6.jpg',
        'assets/img/jessy7.jpg',
        'assets/img/jessy17.jpg',
        'assets/img/jessy16.jpg',
        'assets/img/jessy13.jpg',
        'assets/img/jessy14.jpg',
        'assets/img/jessy15.jpg',
    ]
    render () {

        const CarouselUI = ({ children }) => <Container>{children}</Container>;
        const Carousel = makeCarousel(CarouselUI);

      return (

        <Carousel defaultWait={1000} /*wait for 1000 milliseconds*/ >
            {this.img.map((img, index) => (
                <Slide right>
                    <div>
                    <img style={{width: '100%', height: '100%'}} src={img} alt="img" />
                    </div>
                </Slide>
            ))}
      </Carousel>
      );
    }
  }

  export default Carousel;