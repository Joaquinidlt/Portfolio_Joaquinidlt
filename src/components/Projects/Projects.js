import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Proyects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, tags, description, source, visit, youtube}) => (
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title> {title} </HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo> {description} </CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}> {tag} </Tag>
              ))}
            </TagList>
            <UtilityList>
                {visit && 
                  <ExternalLinks href={visit} target='_blank'>Code</ExternalLinks>                
                }
                {source && 
                  <ExternalLinks href={source} target='_blank'>Link</ExternalLinks>
                }
                {youtube && 
                  <ExternalLinks href={youtube} target='_blank'>Youtube</ExternalLinks>
                }
            </UtilityList>
          </div>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;