import React, { Component } from 'react';
import Article from 'grommet/components/Article';
import Footer from 'grommet/components/Footer';

import Navbar from './Navbar';
import Hero from './Hero';
import Offerings from './Offerings';

class Main extends Component {
  render() {
    return (
      <Article>
        <Navbar />
        <Hero />
        <Offerings />
        <Footer colorIndex='brand'/>
      </Article>
    );
  }
}

export default Main;
