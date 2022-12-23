import styled from "styled-components";
import Logo from "../../Assets/Images/Logo.PNG";

export const ImageContainer = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    
    width:100%;
    height: 50vh;
    background-image: url(${Logo});
    transition: all 3s ease-in-out;
    transform: translateX(${({ animate }) => (animate ? '0' : '-100vw')});
    opacity: ${({ animate }) => (animate ? '100%' : '0')}
`