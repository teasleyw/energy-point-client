import React, {useState} from "react";
import {HeaderContainer, Logo, HeaderDiv, TabContainer, TabItem, MobileIcon, TabItemA} from "./HeaderStyled";
import { FaBars, FaTimes } from 'react-icons/fa';
import {secondaryLight} from "../../AppStyled";
function Header() {
    const [click, setClick] = useState(false);
    return (
        <HeaderDiv click={click}>
            <HeaderContainer>
                <Logo> Energy Point </Logo>
                <MobileIcon onClick = {()=> { setClick(!click) }}>
                    {click ? <FaTimes color={secondaryLight} /> : <FaBars color={secondaryLight} />}
                </MobileIcon>
                <TabContainer onClick={()=> { setClick(!click) }} click={click}>
                    <TabItem> <TabItemA href="#servicesId">Services</TabItemA>        </TabItem>
                    <TabItem> <TabItemA href="#contactUsId">Contact Us</TabItemA></TabItem>
                    <TabItem><TabItemA href="#aboutUsId">About Us</TabItemA></TabItem>
                </TabContainer>
            </HeaderContainer>
        </HeaderDiv>
    )
}
export default Header