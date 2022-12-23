import styled from "styled-components";
import Logo from "./Assets/Images/Logo.PNG"
//COLOR PALLETTE
export const primaryDark = "#3A416F"
export const primaryLight = "#5d83C0"
export const secondaryLight = "#10A3A2"
export const tertiaryLight = "#B0B3B1"
export const websiteBlack = "#111311"

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2vh;
    height: 100%;
`
export const ImageContainer = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    
    width:100%;
    height: 50vh;
    background-image: url(${Logo});
`
export const InputContainer = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${tertiaryLight};
    color: ${websiteBlack};
    border-radius: 10px;
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
  
  
`

export const Input = styled.input`
  color: ${websiteBlack};
  border: none;
  background-color: transparent;
  padding: 0;
  &::placeholder{
    color: ${websiteBlack};
  }
  &:focus{
    outline: none;
  }
`
export const TextArea = styled.textarea`
  border: none;
  background-color: transparent;
  color: black;
  padding: 0;
  &::placeholder{
    color: ${websiteBlack};
  }
  &:focus{
    outline: none;
  }
`
export const Label = styled.label`
  text-align: left;
  color: black;
`