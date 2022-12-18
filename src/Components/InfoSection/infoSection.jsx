import React  from 'react';
import {InfoSectionContainer, InfoSectionOne, InfoSectionTwo} from "./infoSectionStyled";

const InfoSection = (
    {
        inverse = false,
        sectionOne= "",
        sectionTwo = ""
    }
) => {
    return (
        <InfoSectionContainer inverse={inverse}>
            <InfoSectionOne>
                {sectionOne}
            </InfoSectionOne>
            <InfoSectionTwo>
                {sectionTwo}
            </InfoSectionTwo>
        </InfoSectionContainer>
    );
}

export default InfoSection;