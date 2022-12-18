import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2vh;
    height: 100%;
`
export const InputContainer = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #F4F4F4;
    border-radius: 10px;
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
  
  
`

export const Input = styled.input`
  border: none;
  background-color: transparent;
  color: black;
  padding: 0;
  &::placeholder{
    color: darkgrey;
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
    color: darkgrey;
  }
  &:focus{
    outline: none;
  }
`
export const Label = styled.label`
  text-align: left;
  color: black;
`