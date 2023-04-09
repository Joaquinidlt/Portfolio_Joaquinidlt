import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
/* import Button from '../../styles/GlobalComponents/Button'; */
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row ropadding>
    <LeftSection>
      <SectionTitle main center>
        Joaquin Ignacio De la Torre
      </SectionTitle>
      <SectionText>
        Full Stack Web Developer in JavaScript <br/>
        Focused in Front-end.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;