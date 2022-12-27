import styled from 'styled-components';
import {primaryDark, primaryLight, secondaryLight} from "../../AppStyled";

export const InfoSectionContainer = styled.div`
    background-color: ${props => props.inverse ? primaryDark : secondaryLight};
    color: ${props => props.inverse ? 'white' : 'black'};
    min-height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: row;
`
export const InfoSectionOne = styled.div`
    width: 50%;
    padding-bottom: 20px;
    order: ${props => props.inverse ? 0 : 1};
`
export const InfoSectionTwo = styled.div`
    width: 50%;
    padding-bottom: 20px;
    order: ${props => props.inverse ? 1 : 0};
    
    
`