import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import Footer from './Footer'
function Home() {


  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
      <Movies/>
      <Footer/>
    </Container>
  )
}

export default Home

const Container = styled.main`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    overflow-x:hidden;

    &:before {
        background-position:top;
        background-size:cover;
        background-repeat:no-repeat;
        background-image:url("/images/home-background.png");
        content : "";
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        opacity:0.7;
        z-index:-1;
        
    }
`