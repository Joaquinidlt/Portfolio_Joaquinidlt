import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

 const scroll = (node, left) => {
   return node.scrollTo({ left, behavior: 'smooth' });
 }

  const handleClick = (e, i) => {
   e.preventDefault();

   if (carouselRef.current) {
     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
     scroll(carouselRef.current, scrollLeft);
    }
  }

 const handleScroll = () => {
   if (carouselRef.current) {
     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

     setActiveItem(index);
   }
 }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
 useEffect(() => {
   const handleResize = () => {
     scroll(carouselRef.current, 0);
   }

   window.addEventListener('resize', handleResize);
 }, []);

  return (
    <Section id="about">
      <SectionTitle>About</SectionTitle>
      <SectionText>
      I trained at SoyHenry, I did an intensive 5 month bootcamp there, with more than +900 hours of study and coding. Then I started freelancing and now I'm looking for new challenges, motivated to keep learning and growing.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.year}
                </CarouselItemTitle>
                <CarouselItemText> {item.text} </CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider/>
    </Section>
  );
};

export default Timeline;
