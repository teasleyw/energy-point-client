import './App.css';
import HeroSection from "./Components/HeroSection/HeroSection";
import Header from "./Components/Header/Header";
import InfoSection from "./Components/InfoSection/infoSection";
import {loremIpsum} from "./constants/constants";
import {
    AboutUsContainer,
    AboutUsDetails,
    AboutUsTitle,
    AccordionSection,
    ContactContainer, ContactUsText,
    ImageContainer,
    Input,
    InputContainer, InstallationContent,
    Label,
    TextArea, Video, VideoContainer
} from "./AppStyled";
import React from "react";
import AboutUsSection from "./Components/AboutUsSection/AboutUsSection";
import Accordion from "./Components/Accordion/Accordion";
import solarVideoOne from "./Assets/Videos/SolarVideoOne.mp4"

function App() {

    const contactSectionText =
        <>
            <ContactUsText>
                Contact us for a quote:
            </ContactUsText>
        </>
    const contactSectionInput =
        <>
            <ContactContainer>
                <InputContainer>
                    <Label> Name </Label>
                    <Input placeholder={"Your Name"}/>
                </InputContainer>
                <InputContainer>
                    <Label> Email Address</Label>
                    <Input placeholder={"Email Address"}/>
                </InputContainer>
                <InputContainer>
                    <Label> Message </Label>
                    <TextArea placeholder={"Your Message"}/>
                </InputContainer>
            </ContactContainer>
        </>
    const AboutUsText =
        <AboutUsContainer>
            <AboutUsTitle>
                About Us
            </AboutUsTitle>
            <AboutUsDetails>
                {loremIpsum}
            </AboutUsDetails>
        </AboutUsContainer>
    const Installation =
        <InstallationContent>
            {loremIpsum}
        </InstallationContent>
    const accordionSection =
        <AccordionSection>
            <Accordion title={"Installation"} content={Installation}/>
            <Accordion title={"Services"} content={loremIpsum}/>
            <Accordion title={"History"} content={loremIpsum}/>
            <Accordion title={"Leadership"} content={contactSectionInput}/>
        </AccordionSection>

  return (
    <div className="App">
        <Header/>
        <HeroSection/>
        <InfoSection inverse={true} sectionOne={accordionSection} sectionTwo={AboutUsText}/>
        <VideoContainer>
            <Video controls={true} src={solarVideoOne} ></Video>
        </VideoContainer>
        <InfoSection inverse={true} sectionOne={contactSectionInput} sectionTwo={contactSectionText}/>
        <InfoSection inverse={false} sectionTwo={<AboutUsSection/>} sectionOne={AboutUsText}/>
    </div>

  );
}

export default App;
