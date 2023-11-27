import React from 'react';
import './idx.css';
function CardService() {
  return (
    <>
      <article class="blog-post">
        <div class="blog-post__img">
          <img src="images/coldstorage.png" alt="" />
        </div>
        <div class="blog-post__info">
          <h2 class="blog-post__title">
            Alpha Diagnostic International, Inc. (ADI){' '}
          </h2>
          <p>
            U.S. biotechnology company headquartered in San Antonio, Texas. ADI
            develops, manufactures, and supplies novel diagnostic and quality
            control reagents and test kits for use in basic biological and
            disease research in humans and animals.
          </p>
          {/* <p>-Room temperature shipment for non sensitive products.</p> */}
        </div>
      </article>
    </>
  );
}
export default CardService;
