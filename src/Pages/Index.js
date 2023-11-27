import React from 'react';

import Carousel from '../Component/Carousell';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import CostumerDone from '../Component/CostumerDone';
import CardService from '../Component/CardService';

function Index() {
  return (
    <>
      <div id="page">
        <Navbar />
        <div
          style={{ display: 'flex', justifyContent: 'Center', margin: '10px' }}
        >
          {' '}
          <CardService />{' '}
        </div>

        <Carousel />
        <CostumerDone />

        <Footer />
      </div>

      <div class="gototop js-top">
        <a href="#" class="js-gotop">
          <i class="icon-arrow-up"></i>
        </a>
      </div>
    </>
  );
}

export default Index;
