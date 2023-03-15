import styled from "styled-components";
import backgroundDesktopImage from './img/pattern-background-desktop.svg'
import backgroundMobileImage from './img/pattern-background-mobile.svg'

export const StyledEnvironment = styled.div`
/* body */
  @media screen and (min-width: 768px) {
      background-image: url(${backgroundDesktopImage});
  }

  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
  background-color: hsl(225, 100%, 94%);
  background-image: url(${backgroundMobileImage});
  background-repeat: no-repeat;
  background-size: 100%;
  margin: 0;
/* main */
  min-height: calc(100vh);
  width: 100%;
`

export const StyledContainer = styled.div`
  /* position: fixed; */
  width: 100%;
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`

export const CardBody = styled.div`
  /* display: grid; */
  align-items: center;
  background-color: hsl(0, 0%, 100%);
  border-radius: 20px;
  overflow: auto;
  width: 355px;
  min-width: 300px;
`

export const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;
`

export const CardTitle = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin: 22px 0;
`

export const CardDescriptionText = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 30px;
  font-size: 16px;
  color: hsl(228, 4%, 57%);
  line-height: 25px;
`

export const SelectedPlanContainer = styled.div`
  border-radius: 12px;
  background-color: hsl(225, 100%, 98%);
  font-size: 16px;
  padding: 15px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
`

export const StyledBold = styled.b`
  font-size: 16px;
`

export const PlanCost = styled.p`
  color: hsl(228, 4%, 57%); 
  font-size: 16px;
`

export const ProceedToPaymentButton = styled.button`
  color: hsl(225, 100%, 94%);
  background-color: hsl(245, 75%, 52%);
  border: 0;
  border-radius: 12px;
  width: 100%;
  padding: 15px;
  box-shadow: 0 10px 16px 0 rgba(56, 41, 224, 0.2);
  margin-bottom: 10px;
  font-weight: 600;
  cursor: pointer;

  &:hover{
    background-color: hsl(245, 75%, 72%);
  }
`

export const CancelPaymentButton = styled.button`
  color: hsl(228, 4%, 40%);
  background-color: hsla(0, 0%, 100%, 0);
  border: 0;
  width: 100%;
  padding: 15px;
  font-weight: 800;
  cursor: pointer;

  &:hover{
    color: hsl(228, 4%, 10%);
  }
`

export const ChangePlantLink = styled.a`
  color: hsl(245, 75%, 52%);
  background-color: hsla(0, 0%, 100%);
  margin: 15px;
  font-weight: 800;
  cursor: pointer;

  &:hover{
    color: hsl(245, 75%, 72%);
    text-decoration: none;
  }
`