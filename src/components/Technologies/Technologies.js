import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    As a web developer, I specialize in various technologies including CodeIgniter, Laravel, SQL, MongoDB, and Next.js. With expertise in these tools, I create efficient and dynamic web solutions to meet diverse technological needs.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>Front-end</ListTitle>
            <ListParagraph>
              Experienced with<br/>
              NextJs
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem"/>
          <ListContainer>
            <ListTitle>Backend-end</ListTitle>
            <ListParagraph>
              Experienced with<br/>
              CodeIgniter<br/>
              Laravel
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size="3rem"/>
          <ListContainer>
            <ListTitle>DataBase</ListTitle>
            <ListParagraph>
              Experienced with<br/>
              MongoDB<br/>
              Sql
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
