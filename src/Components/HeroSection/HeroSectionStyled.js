import styled from 'styled-components';
import heroImage from "../../Assets/Images/SolarPanelHeroImage.jpg"
import Logo from "../../Assets/Images/Logo.PNG"
export const HeroSectionContainer = styled.div`
  width: 100vw;
  height: 75vh;
  background-image: linear-gradient(90deg, rgb(58, 65, 111), rgba(58, 65, 111, 0.5)), url(${heroImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 100vw;
    height: 25vh;
    background-image: linear-gradient(to-top, #FFFFFF 10.98%, rgba(0, 20, 46, 0) 98.6%), url(${heroImage});
  }
`
export const HeroSectionTextContainer = styled.div`
   
  `
export const HeroSectionImageContainer = styled.div`
   height: 100%;
   width: 100%;
   background-repeat: no-repeat;
   background-size: contain;
   background-position: right;
   background-image: url(${Logo});
   z-index: 999;
   position: relative;
    transition: all 1s ease-in-out;
    transform: translateX(${props => (props.animate ? '0' : '20vw')});
    opacity: ${props => props.animate ? '100%' : '0'}
  `
export const HeroSectionText = styled.div`
    width: 50%;
    text-align: center;
    z-index: 0;
    color: white;
    font-family: Vogue,serif;
    font-size: 5rem;
    transition: all 1s ease-in-out;
    transform: translateY(${props => (props.animate ? '0' : '25vh')});
    opacity: ${props => props.animate ? '100%' : '0'}
  
`
