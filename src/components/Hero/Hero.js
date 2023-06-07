import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Portfolio
      </SectionTitle>
      <SectionText>
      Experienced web developer skilled in CodeIgniter, Laravel, SQL, MongoDB, and Next.js, with a strong background in technology and a passion for creating dynamic and efficient web solutions.
      </SectionText>
      {/* <Button onClick={() => window.location='https://www.google.com'}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;