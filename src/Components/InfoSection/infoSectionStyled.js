import styled from 'styled-components';

export const InfoSectionContainer = styled.div`
    background-color: ${props => props.inverse ? 'black' : 'white'};
    color: ${props => props.inverse ? 'white' : 'black'};
    height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: row;
`
export const InfoSectionOne = styled.div`
    font-family: Vogue,serif;
    font-size: 3rem;
    width: 50%;
    order: ${props => props.inverse ? 0 : 1};
    align-self: center;
`
export const InfoSectionTwo = styled.div`
    width: 50%;
    order: ${props => props.inverse ? 1 : 0};
    
    
`