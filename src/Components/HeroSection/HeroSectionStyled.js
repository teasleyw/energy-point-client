import styled from 'styled-components';
import heroImage from "../../Assets/Images/SolarPanelHeroImage.jpg"
import Logo from "../../Assets/Images/Logo.PNG"
import {secondaryLight} from "../../AppStyled";
export const HeroSectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, rgb(5, 13, 52), rgba(17, 22, 51, 0.7) ), url(${heroImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 960px) {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to-top, #FFFFFF 10.98%, rgba(0, 20, 46, 0) 98.6%), url(${heroImage});
  }
`
export const HeroSectionContentContainer = styled.div`
  box-sizing: border-box;
  padding: 80px 25px 50px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: row;
`
export const HeroSectionImageContainer = styled.div`
   order: 2;
   height: 50%;
   width: 100%;
   background-repeat: no-repeat;
   background-size: contain;
   background-position: right;
   align-self: flex-start;
   background-image: url(${Logo});
   z-index: 10;
   position: relative;
    transition: all 1s ease-in-out;
    transform: translateX(${props => (props.animate ? '0' : '20vw')});
    opacity: ${props => props.animate ? '100%' : '0'};
    @media screen and (max-width: 960px) {
      order: 0;
      background-position: center;
      height: 100%;
    }
  `
export const HeroSectionText = styled.div`
    width: 100%;
    text-align: center;
    z-index: 0;
    color: ${secondaryLight};
    font-family: Vogue,serif;
    font-size: 5rem;
    transition: all 1s ease-in-out;
    transform: translateY(${props => (props.animate ? '0' : '25vh')});
    opacity: ${props => props.animate ? '100%' : '0'};
    @media screen and (max-width: 960px) {
      display: none;
    }
  
`
