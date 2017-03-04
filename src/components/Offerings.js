import React from 'react';
import Section from 'grommet/components/Section';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Animate from 'grommet/components/Animate';
import GlobeLogo from 'grommet/components/icons/base/Globe';
import EditLogo from 'grommet/components/Icons/base/Edit';
import ReactLogo from 'grommet/components/Icons/base/PlatformReactjs';

const Offerings = () => {
  return (
    <Section>
      <Columns size='medium'
        justify='center'>
        <Animate enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 0}}>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'
            >
            <GlobeLogo size='large' />
            <h2>Web Programming</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </Box>
        </Animate>
        <Animate enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 400}}>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'
          >
            <EditLogo size='large' />
            <h2>Design & Develop</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </Box>
        </Animate>
        <Animate enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 600}}>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'
          >
            <ReactLogo size='large' />
            <h2>Modern Technology</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </Box>
        </Animate>
      </Columns>
    </Section>
  );
};

export default Offerings;
