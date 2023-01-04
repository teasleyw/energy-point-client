import React, {useEffect, useRef, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";
import {
    HeroSectionContainer,
    HeroSectionContentContainer,
    HeroSectionImageContainer,
    HeroSectionText, MobileDownArrow,
} from "./HeroSectionStyled";
import {TabItemA} from "../Header/HeaderStyled";

const HeroSection =() =>{
    const [isVisible, setVisible] = useState(false);
    const documentRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(enteries => {
            enteries.forEach(entry => {
                if(entry.isIntersecting ){
                    setVisible(true)
                    observer.unobserve(documentRef.current)
                }
            });
        });
        if (documentRef.current) observer.observe(documentRef.current)
        return () => observer.disconnect()
    }, );
    return (
        <HeroSectionContainer id={"hero-section-id"}>
            <HeroSectionContentContainer>
            <HeroSectionImageContainer  ref={documentRef} animate={isVisible} />
                <HeroSectionText animate={isVisible}>
                    Venta e instalación de paneles solares en
                </HeroSectionText>
                <MobileDownArrow >
                    <TabItemA href={"#servicesId"}> <FontAwesomeIcon size="4x" icon={faCircleChevronDown} color="white"/> </TabItemA>
                </MobileDownArrow>
            </HeroSectionContentContainer>
        </HeroSectionContainer>
    );

}

export default HeroSection;