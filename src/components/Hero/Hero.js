import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <SectionText>Hey my name is</SectionText>
          Neel Tejani.
          <br />
          Software Engineer
        </SectionTitle>
        <SectionText>
          As a software engineer, I am always eager to explore new
          opportunities. This website serves as a platform to showcase my
          portfolio and highlight the various tools and technologies I am
          proficient in.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
