import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  height: 450px;
  width: auto;
  border-radius: 20px;
  margin: 10px 20px;
  overflow: hidden;
  transition: all 0.5s;
  box-shadow: 0 0 7px ${({ theme }) => theme.selected === 'light' ? '#999' : '#000'};

  &:hover{
    box-shadow: 0 0 15px ${({ theme }) => theme.selected === 'light' ? '#999' : '#000'};

    img{
      width: 120%;
      height: 120%;
      top: -10%;
      left: -10%;
    }
    div{
      bottom: 2%;
      left: 2%;
      width: 96%;
    }
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  top: 0;
  left: 0;
  transition: all 0.5s ease-out;
`

export const CardTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  position: absolute;
  bottom: 5%;
  left: 5%;
  width: 90%;
  height: auto;
  
  color: ${({ theme }) => theme[theme.selected].textOnSecondary};
  text-align: center;
  padding: 15px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme[theme.selected].secondary};
  opacity: 0.9;
  transition: all 0.5s ease-out;

  h3{
    flex-grow: 1;
    margin-left: calc(1rem + 10px);
  }
  svg{
    margin-right: 10px;
  }
`