
import './App.css';
import HeroSection from "./Components/HeroSection/HeroSection";
import Header from "./Components/Header/Header";
import InfoSection from "./Components/InfoSection/infoSection";
import {AboutUsTitle, ContactContainer, ImageContainer, Input, InputContainer, Label, TextArea} from "./AppStyled";
import React from "react";
import AboutUsSection from "./Components/AboutUsSection/AboutUsSection";
import Accordion from "./Components/Accordion/Accordion";

function App() {

    const contactSectionText =
        <>
            <div>
                Contact us for a quote:
            </div>
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
        <>
            <AboutUsTitle>
                About Us
            </AboutUsTitle>
        </>
    const accordionSection =
        <>
            <Accordion title={"Installation"} content={contactSectionInput}/>
            <Accordion title={"Installation"} content={contactSectionInput}/>
            <Accordion title={"Installation"} content={contactSectionInput}/>
            <Accordion title={"Installation"} content={contactSectionInput}/>
        </>

  return (
    <div className="App">
        <Header/>
      <HeroSection/>
        <InfoSection inverse={true} sectionOne={accordionSection} sectionTwo={AboutUsText}/>
        <InfoSection inverse={true} sectionOne={contactSectionText} sectionTwo={contactSectionInput}/>
        <InfoSection inverse={false} sectionTwo={<AboutUsSection/>} sectionOne={AboutUsText}/>



    </div>

  );
}

export default App;
