
import './App.css';
import HeroSection from "./Components/HeroSection/HeroSection";
import Header from "./Components/Header/Header";
import InfoSection from "./Components/InfoSection/infoSection";
import {ContactContainer, ImageContainer, Input, InputContainer, Label, TextArea} from "./AppStyled";

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
    const AboutUsSection =
        <>
            <ImageContainer/>
        </>
  return (
    <div className="App">
        <Header/>
      <HeroSection/>
        <InfoSection inverse={true} sectionOne={contactSectionText} sectionTwo={contactSectionInput}/>
        <InfoSection inverse={false} sectionTwo={AboutUsSection} sectionOne={contactSectionInput}/>


    </div>

  );
}

export default App;
