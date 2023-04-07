import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'Full Stack Developer Certificate', },
  { text: 'React-hooks-rooter-redux-next.js Certificate', },
  { text: 'React-Native-E-Commerce-IOS-Andoid Certificate', },
  { text: 'Certificate Design Patterns', },  
  { text: 'English EF SET Certificate'},
  { text: 'English, Spanish, Portuguese and German in process.'},
  { text: 'Business Administrator', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText> {card.text} </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
