import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'English, Spanish, Portuguese and German in process.'},
  { text: 'Business Administrator', },
  { text: 'Full Stack Developer Certificate', },
  { text: 'Trader certificate', },
  { text: 'Personal trainer certificate', }
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
