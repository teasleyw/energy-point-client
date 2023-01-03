import styled from 'styled-components';
import {primaryDark,secondaryLight} from "../../AppStyled";

export const InfoSectionContainer = styled.div`
    scroll-margin: 80px;
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
    flex-grow: 0;
    flex-basis: 50%;
    flex-shrink: 0;
      @media screen and (max-width: 960px) {
        flex-direction: column;
      }
  & > * {
    flex-grow: 0;
    flex-basis: 50%;
    flex-shrink: 0;
  }
`
export const InfoSectionOne = styled.div`
    order: ${props => props.inverse ? 0 : 1};
`
export const InfoSectionTwo = styled.div`
    order: ${props => props.inverse ? 1 : 0};
    
    
`