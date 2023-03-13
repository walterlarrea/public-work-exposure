import styled from "styled-components";

export const StyledContainer = styled.div`
  /* position: fixed; */
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 900px;
  }

  align-items: center;
  border-radius: 20px;
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  height: 450px;
  max-width: 400px;
  min-width: 350px;
  margin: 10px 20px;
  border-radius: 20px;
  /* border: solid; */
  /* border-color: ${({ theme }) => theme[theme.selected].primary}; */
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
    width: 50%;
  }

  width: 100%;
  height: 100%;
  object-fit: cover;
  /* max-width: 100%;
  max-height: 100%; */
`

export const CardContent = styled.div`
  display: flex;
  height: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  p{
    color: ${({ theme }) => theme[theme.selected].textOnSurface};
  }
  h3{
    color: ${({ theme }) => theme[theme.selected].textOnSurface};
  }
`