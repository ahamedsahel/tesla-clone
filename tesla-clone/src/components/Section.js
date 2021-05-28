import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';


function Section({ title, description, leftBtnText, rightBtnText, backgroundImage }) {

    return (
       <Wrap bgImage={backgroundImage}>
           <Fade bottom>
           <ItemText>
               <h1>{title}</h1>
               <p>{ description}</p>
           </ItemText>
           </Fade>
           <Button>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                        
                    </LeftButton>
                    {rightBtnText && 
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                    }
                </ButtonGroup>
            </Fade>
            </Button>
            <DownArrow src="/images/down-arrow.svg"/>

            


       </Wrap>
    )
}

export default Section

const Wrap = styled.div`
   width: 100vw;
   height: 100vh;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   background-image: url('/images/model-s.jpg');
   display: flex;
   flex-direction: column;
   justify-content: space-between; //vertial
   align-items: center; //horizontal
   background-image: ${props => `url('/images/${props.bgImage}')`}
`
const ItemText = styled.div`
    text-align: center;
    padding-top: 15vh
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: -15px;
    @media (max-width: 785px) {
        flex-direction:column;
    }
`
const LeftButton = styled.div`
    width: 256px;
    height: 40px;
    background-color: gray;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background: white;
    color: black;
    opacity: 0.65;

    `

const DownArrow = styled.img`
    
    height: 40px;
    overflow-x: hidden; 
    animation: animateDown infinite 1.5s;
    
`
const Button = styled.div`
    margin-top: 45vh;
`