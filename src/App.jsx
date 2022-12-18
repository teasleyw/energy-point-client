
import './App.css';
import HeroSection from "./Components/HeroSection/HeroSection";
import Header from "./Components/Header/Header";
import InfoSection from "./Components/InfoSection/infoSection";
import {ContactContainer, Input, InputContainer, Label, TextArea} from "./AppStyled";

function App() {
    const contactSectionText =
        <>
            <div>
                Contact us for a quote:
            </div>
            <div>
                (include image of electric receipt for a estimation)
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
  return (
    <div className="App">
        <Header/>
      <HeroSection/>
        <InfoSection inverse={true} sectionOne={contactSectionText} sectionTwo={contactSectionInput}/>
        <InfoSection inverse={false}/>


    </div>

  );
}

export default App;
