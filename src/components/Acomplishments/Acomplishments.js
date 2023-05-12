import Link from 'next/link';
import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'Full Stack Developer Certificate', pdf: '/images/CertificadoFSD.pdf'},
  { text: 'React-TypeScript-Redux-GraphQL-Test Certificate', pdf: '/images/React-Developer-2023-Redux-Hooks-GrephQL.pdf'},
  { text: 'React-Hooks-Rooter-Redux-Next.js Certificate', pdf: '/images/React-hooks-rooter-redux-next.pdf'},
  { text: 'React-Native-E-Commerce-IOS-Andoid Certificate', pdf: '/images/React-Native-E-Commerce-iOS-Andoid.pdf'},
  { text: 'Certificate Design Patterns', pdf: '/images/PatronesDeDiseñoCertificate.pdf'},  
  { text: 'English EF SET Certificate', pdf: '/images/EF-SET-Certificate.pdf'},
  { text: 'English, Spanish, Portuguese and German in process.'},
  { text: 'Business Administrator', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index} >
          <BoxText href={card.pdf} target="_blank"> {card.text} </BoxText>          
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
