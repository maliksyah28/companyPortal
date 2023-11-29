import React from 'react';
import './idx.css';
function CardService({image, title, desc}) {
  return (
    <>
      <article class="blog-post">
        {/* <div class="blog-post__img"> */}
          <img src={image} alt="" width={350} height={'auto'} />
        {/* </div> */}
        <div class="blog-post__info">
          <h2 class="blog-post__title">
            {title}
          </h2>
          <p>
            {desc}
          </p>
          {/* <p>-Room temperature shipment for non sensitive products.</p> */}
        </div>
      </article>
    </>
  );
}
export default CardService;
