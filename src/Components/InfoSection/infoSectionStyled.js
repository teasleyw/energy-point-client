import styled from 'styled-components';
import {primaryDark,secondaryLight} from "../../AppStyled";

export const InfoSectionContainer = styled.div`
    background-color: ${props => props.inverse ? primaryDark : secondaryLight};
    color: ${props => props.inverse ? 'white' : 'black'};
    min-height: 50vh;
    padding-top: 20px;
    z-index: 998;
    position: relative;
    padding-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
`
export const InfoSectionOne = styled.div`
    width: 50%;
    order: ${props => props.inverse ? 0 : 1};
`
export const InfoSectionTwo = styled.div`
    width: 50%;
    order: ${props => props.inverse ? 1 : 0};
    
    
`