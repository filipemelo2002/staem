import React, { useEffect, useMemo, useRef, useState } from 'react';

import { Container, CarouselContainer, DottedScroll } from './styles';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

const Carousel = () => {
  const carouselRef = useRef()
  const [elements, setElements] = useState([
    {
      src: img1
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
  ]);

  const [selectedItem, setSelectedItem] = useState(0);

  const onScroll = (event)=>{
    const wrappers = event.target.querySelectorAll('div');
    const containerOffset = event.target.getBoundingClientRect();
    wrappers.forEach((wrapper) => {
      const imageOffset = wrapper.getBoundingClientRect();
      const marginLeft = (imageOffset.x - containerOffset.x ) / containerOffset.width;
      const image = wrapper.querySelector('img');
      if (marginLeft <= 0.46 && marginLeft  >= (-0.13)) {
        image.classList.add('grow')
      } else {
        image.classList.remove('grow')
      }
    })
  }

  useEffect(() => {
    if (carouselRef.current) {
      const images = carouselRef.current.querySelectorAll('div');
      images[selectedItem].scrollIntoView({
          behavior: 'auto',
          block: 'center',
          inline: 'center'
      });
    }
  }, [selectedItem])
  return (
    <Container>
      <CarouselContainer
        onScroll={onScroll}
        ref={carouselRef}
      >
        {
          elements.map((element, index) => {
            return(
              <div  key={String(index)}>
                <img 
                  src={element.src} 
                  className={index === 0 ? 'grow' : ''}
                />
              </div>
          )})
        }
      </CarouselContainer>
      <DottedScroll>
        {
          elements.map((element, index) => (
            <li  
              key={String(index)} onClick={() => setSelectedItem(index)}
              className={ index === selectedItem ? 'selected' : ''}
            />
          ))
        }
      </DottedScroll>
    </Container>
  );
}

export default Carousel;