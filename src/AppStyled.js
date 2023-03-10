import styled from "styled-components";
import Logo from "./Assets/Images/Logo.PNG"
//COLOR PALLETTE
export const primaryDark = "#050D34FF"
export const primaryLight = "#5d83C0"
export const secondaryLight = "#c0c5cc"
export const tertiaryLight = "#B0B3B1"
export const websiteBlack = "#111311"
export const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 50px;
    padding-right: 25px;
    padding-left: 25px;
`
export const ContactContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2vh;
    height: 100%;
`
export const VideoContainer = styled.div`
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${primaryDark};
    
`
export const Video = styled.video`
    width: 50vw;
    height: auto;
  @media screen and (max-width: 960px) {
    width: 90vw;
  };
  
`
export const ContactUsText = styled.div`
  font-size: 50px;
  font-weight: 500;
  border-bottom: ${secondaryLight} 1px solid;
`
export const ContactUsSubText = styled.div`
  padding-top: 25px;
  padding-left: 25px;
  text-align: left;
  font-size: 30px;
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
export const AboutUsContainer = styled.div`
    padding-left: 25px;
    padding-right: 25px;
    
`
export const AboutUsTitle = styled.div`
    font-size: 60px;
    font-weight: 500;
    border-bottom: ${websiteBlack} 1px solid;
`
export const AboutUsDetails = styled.div`
    font-size: 25px;
    font-weight: 400;
    text-align: left;
`
export const InstallationContent = styled.div`
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