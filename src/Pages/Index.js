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
       <div style={{ width: '100%', display: 'flex', justifyContent: 'Center'}}>
       <div
          style={{ margin: '10px',display: 'flex', justifyContent: 'Center', flexWrap: 'wrap', width: '70vw' }}
        >
          <CardService 
          image={'images/alphadiagnostic.png'} 
          title={'Alpha Diagnostic International, Inc. (ADI)'}
          desc={`U.S. biotechnology company headquartered in San Antonio, Texas. ADI
          develops, manufactures, and supplies novel diagnostic and quality
          control reagents and test kits for use in basic biological and
          disease research in humans and animals.`}
          />
          <CardService 
          image={'images/coldstorage.png'} 
          title={'Alpha Diagnostic International, Inc. (ADI)'}
          desc={`U.S. biotechnology company headquartered in San Antonio, Texas. ADI
          develops, manufactures, and supplies novel diagnostic and quality
          control reagents and test kits for use in basic biological and
          disease research in humans and animals.`}
          />
          <CardService 
          image={'images/coldstorage.png'} 
          title={'Alpha Diagnostic International, Inc. (ADI)'}
          desc={`U.S. biotechnology company headquartered in San Antonio, Texas. ADI
          develops, manufactures, and supplies novel diagnostic and quality
          control reagents and test kits for use in basic biological and
          disease research in humans and animals.`}
          />
          <CardService 
          image={'images/coldstorage.png'} 
          title={'Alpha Diagnostic International, Inc. (ADI)'}
          desc={`U.S. biotechnology company headquartered in San Antonio, Texas. ADI
          develops, manufactures, and supplies novel diagnostic and quality
          control reagents and test kits for use in basic biological and
          disease research in humans and animals.`}
          />
          <CardService 
          image={'images/coldstorage.png'} 
          title={'Alpha Diagnostic International, Inc. (ADI)'}
          desc={`U.S. biotechnology company headquartered in San Antonio, Texas. ADI
          develops, manufactures, and supplies novel diagnostic and quality
          control reagents and test kits for use in basic biological and
          disease research in humans and animals.`}
          />
        </div>
       </div>

        {/* <Carousel /> */}
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
