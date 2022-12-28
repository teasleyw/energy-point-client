import React, {useState} from "react";
import {HeaderContainer, Logo, HeaderDiv, TabContainer, TabItem, MobileIcon} from "./HeaderStyled";
import { FaBars, FaTimes } from 'react-icons/fa';
function Header() {
    const [click, setClick] = useState(false);
    return (
        <HeaderDiv>
            <HeaderContainer>
                <Logo>  EnergyPoint</Logo>
                <MobileIcon onClick = {()=> { setClick(!click) }}>
                    {click ? <FaTimes color={"white"} /> : <FaBars color={"white"} />}
                </MobileIcon>
                <TabContainer onClick={()=> { setClick(!click) }} click={click}>
                    {/*<TabItem onClick={() => {navigate('/Events')}}> Upcoming Events </TabItem>*/}
                    <TabItem> Services          </TabItem>
                    <TabItem> About</TabItem>
                    <TabItem> Contact Us</TabItem>
                </TabContainer>
            </HeaderContainer>
        </HeaderDiv>
    )
}
export default Header