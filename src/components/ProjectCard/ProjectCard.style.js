import styled from "styled-components";

export const Card = styled.div`
  @media screen and (min-width: 768px) {
    width: 648px;
  }
  @media screen and (min-width: 992px) {
    flex-direction: row;
    width: 872px;
    height: 327px;
  }
  @media screen and (min-width: 1024px) {
    width: 904px;
    height: 339px;
  }
  @media screen and (min-width: 1280px) {
    width: 1160px;
    height: 435px;
  }
  @media screen and (min-width: 1536px) {
    width: 1416px;
    height: 531px;
  }

  border-radius: 20px;
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;

  height: auto;
  min-width: 295px;
  margin: 20px 20px;
  border-radius: 20px;

  color: ${({ theme }) => theme[theme.selected].textOnPrimary};
  background-color: ${({ theme }) => theme[theme.selected].surface};

  transition: all 0.3s;
  box-shadow: 0 0 5px ${({ theme }) => theme.selected === 'light' ? '#999' : '#000'};

  &:hover{
    box-shadow: 0 0 13px ${({ theme }) => theme.selected === 'light' ? '#999' : '#000'};
  }
`

export const CardImage = styled.img`
  @media screen and (min-width: 768px) {
  }
  
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: auto;
  transition: all 0.5s ease-out;
`

export const StyledContentHr = styled.hr`
  background-color: ${({ theme }) => theme[theme.selected].primary};
  border: 0;
  height: 0.26rem;
  width: 8rem;
  margin-bottom: 0.5rem;
  `

export const CardContent = styled.div`
  display: flex;
  flex-shrink: 2;
  height: 100%;
  width: 100%;
  padding: 20px;
  padding-bottom: 30px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  >p{
    color: ${({ theme }) => theme[theme.selected].textOnSurface};
  }
  h3{
    color: ${({ theme }) => theme[theme.selected].textOnSurface};
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
  >p>a, >p>a>svg{
    text-decoration: none;
    font-size: 0.8rem;
    color: ${({ theme }) => theme[theme.selected].textOnSurface};
    opacity: 0.8;
  }
`

export const PrimaryLink = styled.a`
  position: relative;
  top: 0;
  color: ${({ theme }) => theme[theme.selected].textOnPrimary};
  background-color: ${({ theme }) => theme[theme.selected].primary};
  text-decoration: none;
  margin-right: 15px;
  margin-bottom: 20px;
  padding: 8px 15px;
  border: 2px solid ${({ theme }) => theme[theme.selected].primary};
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0.8;
  transition: all 0.25s;

  &:hover{
    top: -3px;
    opacity: 1;
  }
`
export const SecondaryLink = styled(PrimaryLink)`
  color: ${({ theme }) => theme[theme.selected].primary};
  background-color: ${({ theme }) => theme[theme.selected].surface};

`


/* export const SecondaryLink = styled.a`
  color: ${({ theme }) => theme[theme.selected].primary};
  background-color: ${({ theme }) => theme[theme.selected].surface};
  text-decoration: none;
  margin-right: 15px;
  padding: 8px 15px;
  border: 2px solid ${({ theme }) => theme[theme.selected].primary};
  border-radius: 10px;
` */