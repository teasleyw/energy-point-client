import React, {useState} from "react";
import {HeaderContainer, Logo, HeaderDiv, TabContainer, TabItem, MobileIcon} from "./HeaderStyled";
import { FaBars, FaTimes } from 'react-icons/fa';
import {primaryLight, secondaryLight} from "../../AppStyled";
function Header() {
    const [click, setClick] = useState(false);
    return (
        <HeaderDiv>
            <HeaderContainer>
                <Logo>  Energy Point</Logo>
                <MobileIcon onClick = {()=> { setClick(!click) }}>
                    {click ? <FaTimes color={secondaryLight} /> : <FaBars color={secondaryLight} />}
                </MobileIcon>
                <TabContainer onClick={()=> { setClick(!click) }} click={click}>
                    <TabItem> Services          </TabItem>
                    <TabItem> About</TabItem>
                    <TabItem> Contact Us</TabItem>
                </TabContainer>
            </HeaderContainer>
        </HeaderDiv>
    )
}
export default Header