import styled from 'styled-components';
import {primaryDark, primaryLight, secondaryLight} from "../../AppStyled";

export const AccordionContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${secondaryLight};
  text-align: left;
  width: 100%;
  border-radius: 10px;
`
export const AccordionContent = styled.div`
      color: black;
      height: 30px;
      display: flex;
      align-items: center;
      padding-right: 10px;
      padding-left: 10px;
      justify-content: space-between;
      font-size: 30px;
      font-family: Coolvetica, serif;
`
export const AccordionDetails = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: all ease 0.4s;
  &.active{
    max-height: 260px;
  }
`