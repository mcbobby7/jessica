import makeCarousel from 'react-reveal/makeCarousel';
import React from 'react';
import Slide from 'react-reveal/Slide';
import Flash from 'react-reveal/Flash';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

class Carousel extends React.Component {
     img = [
       {
        img: 'assets/img/jessy2.jpg',
        text: "If beauty was human, you are the perfect candidate"
       },
       {
        img: 'assets/img/jessy1.jpg',
        text: "Your smile can make the world the most beautiful place"
       }, 
       {
        img: 'assets/img/jessy5.jpg',
        text: "So perfect you dont  need a filter"
       }, 
       {
        img: 'assets/img/jessy4.jpg',
        text: "Breathtaking should mean You in the dictionary"
       }, 
       {
        img: 'assets/img/jessy9.jpg',
        text: "Still perfect without a smile"
       }, 
       {
        img: 'assets/img/jessy6.jpg',
        text: "Your smile is intoxicating. it lingers, it captivates my heart"
       }, 
       {
        img: 'assets/img/jessy7.jpg',
        text: "God was probably showing off by creating someone like you"
       }, 
       {
        img: 'assets/img/jessy17.jpg',
        text: "Yea, but you always had carry over in college of beauty"
       }, 
       {
        img: 'assets/img/jessy16.jpg',
        text: "beauty and brain what more should I ask for"
       }, 
       {
        img: 'assets/img/jessy13.jpg',
        text: "Now I know why I belong here on this earth"
       },
       {
        img: 'assets/img/jessy14.jpg',
        text: "I crown you the queen of my heart"
       },
       {
        img: 'assets/img/jessy15.jpg',
        text: "Roses are red, violets are blue all I want is you"
       } 
    ]
    render () {

        const CarouselUI = ({ children }) => <Container>{children}</Container>;
        const Carousel = makeCarousel(CarouselUI);

      return (

        <Carousel defaultWait={4000}>
            {this.img.map((img, index) => (
                <Slide right>
                    <div>
                      <img style={{width: '100%', height: '100%'}} src={img.img} alt="img" />
                    </div>
                    <div className="footer">
                      <Flash right cascade>
                        <h1><p>{img.text}</p></h1>
                      </Flash>
                    </div>
                </Slide>
            ))}
        </Carousel>
      );
    }
  }

  export default Carousel;