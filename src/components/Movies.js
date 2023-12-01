import React from 'react'
import styled from 'styled-components'
function Movies() {
  return (
    <Container>
        <h4>
            Recommended for You
        </h4>
        <Content>
            <Wrap>
                <a href = "Detail"><img src = "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/6131/666131-h"></img></a>
            </Wrap>
            <Wrap>
                <img src = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7902/1427902-i-79172bb94fef"></img>
            </Wrap>
            <Wrap>
                <img src = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7776/1387776-i-4ee598473544"></img>
            </Wrap>
            <Wrap>
                <img src = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2734/1372734-i-cd4455dbb551"></img>
            </Wrap>
            <Wrap>
                <img src = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5597/1375597-i-6d6e734b9405"></img>
            </Wrap>
            <Wrap>
                <img src = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8311/1368311-i-712cf0c2c961"></img>
            </Wrap>
            <Wrap>
                <img src = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7240/1627240-i-ccbd81fc1105"></img>
            </Wrap>
            <Wrap>
                <img src = "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/9116/1629116-t-826ea0750448"></img>
            </Wrap>
        </Content>
        <h4>
            Popular Languages
        </h4>
        <Content>
            <Wrap>
                <img src = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_2048/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e"></img>
            </Wrap>
            <Wrap>
                <img src = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_2048/sources/r1/cms/prod/6660/1526660-a-afdd1ecfd8ae"></img>
            </Wrap>
            <Wrap>
                <img src = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_2048/sources/r1/cms/prod/6682/1526682-a-fd4e220ba563"></img>
            </Wrap>
            <Wrap>
                <img src = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_2048/sources/r1/cms/prod/6685/1526685-a-5f5995a53f61"></img>
            </Wrap>
            </Content>
            <h4>
            K-Dramaland
        </h4>
        <Content>
            <Wrap>
                <img src = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3118/1443118-i-f277cf8a140e"></img>
            </Wrap>
            <Wrap>
                <img src = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8047/1428047-i-6285836b07c7"></img>
            </Wrap>
            <Wrap>
                <img src = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/723/1440723-i-c19e40879996"></img>
            </Wrap>
            <Wrap>
                <img src = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3136/1443136-i-3ef74303e41f"></img>
            </Wrap>
            </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
overflow:hidden;
`

const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns : repeat(4,minmax(0, 1fr));
`

const Wrap = styled.div`
border-radius:10px;
cursor:pointer;
overflow:hidden;
border: 3px solid rgba(249, 249, 249, 0.1); 
box-shadow:rgba(0 0 0 / 69%) 0px 26px 30px -10px,
            rgba(0 0 0 / 73%) 0px 16px 10px -10px;
            transition: all 250ms cubic-bezier(0.25,0.45,0.45,0.94) 0s;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}

&:hover{
    transform:scale(1.01);
    box-shadow:rgba(0 0 0 / 80%) 0px 40px 58px -16px,
            rgba(0 0 0 / 72%) 0px 30px 72px -10px;
    border-color: rgba(249, 249, 249, 0.8);
}
`
