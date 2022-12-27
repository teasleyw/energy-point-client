import React, {useEffect, useRef, useState} from 'react';
import {HeroSectionContainer, HeroSectionText, HeroSectionTextContainer} from "./HeroSectionStyled";

const HeroSection =() =>{
    return (
        <HeroSectionContainer>
            <HeroSectionTextContainer>
                <HeroSectionText animate={true}>
                    Venta e instalación de paneles solares en
                </HeroSectionText>
            </HeroSectionTextContainer>
        </HeroSectionContainer>
    );

}

export default HeroSection;