import React from 'react'
import styled from 'styled-components';
function Footer() {
  return (
    <Content>
      <Insider>
        <h4> Company</h4>
        <p> About Us</p>
        <p> Careers</p>
      </Insider>
      <Insider>
        <h4>Need Help?</h4>
        <p> Visit Help Center</p>
        <p>Share FeedBack</p>
      </Insider>
      <Insider>
        <h4>View Website In</h4>
        <p> English</p>
      </Insider>
      <Insider>
        <h4>Contact Wit Us</h4>
      </Insider>
      <Contai>
        <h4>STAR.All Rights Reserved.</h4>
        </Contai>
    </Content>
    
  )
}

export default Footer

const Content = styled.div`
margin:40px 10px;
    display:flex;
    justify-content:space-between;
`
const Insider = styled.div`

`
const Contai =  styled.div`
`
