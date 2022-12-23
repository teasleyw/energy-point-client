import styled from 'styled-components';
import heroImage from "../../Assets/Images/SolarPanelHeroImage.jpg"

export const HeroSectionContainer = styled.div`
  width: 100vw;
  height: 75vh;
  background-image: linear-gradient(90deg, rgb(58, 65, 111), rgba(58, 65, 111, 0.5)), url(${heroImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  @media screen and (max-width: 960px) {
    width: 100vw;
    height: 25vh;
    background-image: linear-gradient(to-top, #FFFFFF 10.98%, rgba(0, 20, 46, 0) 98.6%), url(${heroImage});
  }
`
export const HeroSectionTextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  `
export const HeroSectionText = styled.div`
    text-align: center;
    color: white;
    font-family: Vogue,serif;
    font-size: 5rem;
`
