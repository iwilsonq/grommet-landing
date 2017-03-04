import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import ActionsIcon from 'grommet/components/icons/base/Actions'
import Anchor from 'grommet/components/Anchor';

export default class Navbar extends Component {
  render() {
    return (
      <Header colorIndex='brand'>
        <Box flex={true}
          direction='row'
          pad={{horizontal: 'medium'}}
          responsive={false}
        >
          <Title>APM</Title>
          <Box flex={true}
            responsive={false}
            justify='end'
            direction='row'
            >
            <Menu icon={<ActionsIcon />}
              dropAlign={{"right": "right"}}
              inline={true}
              responsive={true}
              direction='row'
              >
              <Anchor href='#'
                className='active'>
                Home
              </Anchor>
              <Anchor href='#'>
                About us
              </Anchor>
              <Anchor href='#'>
                Services
              </Anchor>
              <Anchor href='#'>
                Portfolio
              </Anchor>
              <Anchor href='#'>
                Contact
              </Anchor>
            </Menu>
          </Box>
        </Box>
      </Header>
    );
  }
}
