import styled from "styled-components";

export const StyledEnvironment = styled.div`
/* body */
  /* @media screen and (min-width: 768px) {

  } */

  font-family: 'Overpass', sans-serif;
  color: hsl(0, 0%, 100%);
  font-weight: 400;
  margin: 0;
  padding: 0;
  background-color: hsl(216, 12%, 8%);
/* main */
  min-height: calc(100vh);
  width: 100%;
`

export const StyledContainer = styled.div`
  width: 100%;
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`

export const StyledPrompt = styled.div`
  align-items: center;
  background-color: hsl(215, 40%, 17%);
  background-image: radial-gradient(circle at top, hsl(215, 40%, 20%) 0%, hsl(215, 40%, 14%) 70%);
  color: hsl(0, 0%, 100%);
  border-radius: 20px;
  overflow: auto;
  height: 400px;
  width: 355px;
  min-width: 300px;
  padding: 25px;
  margin: 20px;
`

export const StyledPromptFlex = styled(StyledPrompt)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p{
    text-align: center;
  }
`

export const CircleContainer = styled.div`
  font-family: 'Overpass', sans-serif;
  width: 47px;
  height: 47px;
  /* background-color: hsl(216, 12%, 54%); */
  background-color: hsl(210, 32%, 27%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  `

export const SelectiveCicleContainer = styled(CircleContainer)`
  &:hover{
    background-color: hsl(25, 97%, 53%);
  }
  &.selected{
    background-color: hsl(217, 12%, 54%);
  }
  `

export const StyledH2 = styled.h2`
  font-family: 'Overpass', sans-serif;
  font-size: 25px;
  margin-top: 20px;
  font-weight: 700;
  `

export const StyledP = styled.p`
  font-family: 'Overpass', sans-serif;
  font-size: 15px;
  `

export const HighlightP = styled(StyledP)`
color: hsl(25, 97%, 53%);
background-color: hsl(210, 32%, 27%);
padding: 5px 20px;
margin-top: 10px;
border-radius: 20px;
`

export const RatingSelectorsContainer = styled.div`
  display: flex;
  margin: 30px 0 20px 0;
  justify-content: space-between;
  cursor: pointer;
`

export const SubmitButton = styled.button`
  font-family: 'Overpass', sans-serif;
  background-color: hsl(25, 97%, 53%);
  height: 50px;
  width: 100%;
  border: none;
  border-radius: 30px;
  /* font-weight: 700; */
  color: hsl(0, 0%, 100%);
  cursor: pointer;

  &:hover{
    background-color: hsl(0, 0%, 100%);
    color: hsl(25, 97%, 53%);
  }
`