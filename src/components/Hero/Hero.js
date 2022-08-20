import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
/* import Button from '../../styles/GlobalComponents/Button'; */
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row ropadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Full Stack Web Developer in JavaScript
      </SectionText>
{/*       <Button onClick={() => window.location = 'https://google.com'}>
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;