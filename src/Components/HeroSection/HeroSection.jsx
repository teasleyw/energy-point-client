import React, {useEffect, useRef, useState} from 'react';
import {HeroSectionContainer, HeroSectionImageContainer, HeroSectionText, HeroSectionTextContainer} from "./HeroSectionStyled";

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
            <HeroSectionImageContainer  ref={documentRef} animate={isVisible} />
            <HeroSectionTextContainer>
                <HeroSectionText ref={documentRef} animate={isVisible}>
                    Venta e instalación de paneles solares en
                </HeroSectionText>
            </HeroSectionTextContainer>
        </HeroSectionContainer>
    );

}

export default HeroSection;