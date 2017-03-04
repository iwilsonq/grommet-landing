import React from 'react';
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';

const HeroComponent = () => {
  return (
    <Hero
      background={
        <Image src='/img/meadow.jpg'
          fit='cover'
          full={true}
        />}
      backgroundColorIndex='dark'
    >
      <Box direction='row'
        justify='center'
        align='center'>
        <Box basis='1/2'
          align='end'
          pad='medium' />
        <Box basis='1/2'
          align='start'
          pad='medium'>
          <Heading margin='none'>
            Design, Develop, Done.
          </Heading>
        </Box>
      </Box>
    </Hero>
  );
};

export default HeroComponent;
