import styled from "styled-components";
import Logo from "../../Assets/Images/Logo.PNG";
import family from "../../Assets/Images/solar-family.JPG"

export const ImageContainer = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: red;
    
    width:100%;
    height: 50vh;
    background-image: url(${family});
    transition: all 1s ease-in-out;
    transform: translateX(${props => (props.animate ? '0' : '-50vw')});
    opacity: ${props => props.animate ? '100%' : '0'}
`