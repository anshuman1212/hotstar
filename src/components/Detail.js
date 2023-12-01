import React from 'react'
import styled from 'styled-components'
function Detail() {
  return (
    <Container>
      <Background>
        <img src = "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/6773/1366773-i-18687272b330" />
      </Background>
      <ImageTitle>
        <img src = "https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/6775/1366775-t-c895dcf7822f"/>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src = "/images/play-icon-black.png"/>
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src = "/images/play-icon-white.png"/>
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
            <img src = "/images/group-icon.png"/>
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2022 | 2hr 10m | Sci-Fi, Fantasy, Action
      </SubTitle>
      <Description>
      Dr. Strange faces a difficult choice of whether to return to his life of luxury or to protect the world as the most powerful sorcerer in existence.
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
`

const Background = styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
opacity:0.8;
img{
  width:100%;
  height:100%;
}

`
const ImageTitle = styled.div`
    height:20vh;
    width:30vw;
    min-height:150px;
    min-width:200px;
    margin-top:100px;
    img{
      width:100%;
      height:100%;
      object-fit:contain;
    }
`
const Controls = styled.div`
    display:flex;
    align-items:center;
    margin-top:50px;
    margin-left:10px;
`
const PlayButton = styled.button`
      border-radius: 4px;
      font-size:15px;
      padding:0px 24px;
      margin-right:22px;
      display:flex;
      align-items:center;
      height:56px;
      background:rgb(249,249,249);
      border:none;
      letter-spacing:1.8px;
      cursor:pointer;

      &:hover {
        background:rgb(198,198,198);
      }
`

const TrailerButton = styled(PlayButton)`
  background:rgba(0,0,0,0.3);
  border:1px solid rgb(249,249,249);
  color:rgb(249,249,249);
  text-transform:uppercase;
`

const AddButton = styled.button`
    height:44px;
    width:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid white;
    background-color:rgba(0,0,0,0.6);
    cursor:pointer;
    margin-right:16px;
    span{
      font-size:30px;
      color:white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background-color:black;
`

const SubTitle = styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:26px;
`

const Description = styled.div`
    line-height:1.4;
    fonr-size:20px;
    margin-top:20px;
    color: rgb(249,249,249);
`