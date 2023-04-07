import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web develompen world.
      From Back-end to Front-End.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            - JavaScript <br/>
            - TypeScript <br/>
            - React <br/>
            - Next.js <br/>
            - React Native <br/>
            - Redux <br/>
            - GraphQL <br/>
            - HTML 5 <br/>
            - CSS 3 <br/>
            - SASS <br/>
            - Material UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            - Node.js <br/>
            - Express.js <br/>
            - PostgresSQL <br/>
            - MongoDB 
          </ListParagraph>
        </ListContainer>
      </ListItem>
       <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Tools like Figma.
          </ListParagraph>
        </ListContainer>
      </ListItem> 
    </List>
  </Section>
);

export default Technologies;
