import React, { useEffect, useMemo, useState } from 'react';

import { Container } from './styles';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

const Carousel = () => {
  const [elements, setElements] = useState([
    {
      src: img1,
      isSelected: false
    },
    {
      src: img2,
      isSelected: true
    },
    {
      src: img3,
      isSelected: false
    },
    {
      src: img3,
      isSelected: false
    },
    {
      src: img3,
      isSelected: false
    },
  ]);

  const getCroppedArray = (array = []) => {
    const selectedIndex = array.indexOf(array.find(el => el.isSelected));
    const prevSelected = (selectedIndex - 1) % array.length;
    const aftSelected = (selectedIndex + 1) % array.length;
    return [array[prevSelected], array[selectedIndex], array[aftSelected]]
  }
  const renderedImages = useMemo(() => getCroppedArray(elements), [elements]);

  const setSelected = (index) => {
    
    const newArray = elements.map((element, i) => {
      return ({...element, isSelected: i === index}) 
    });

    setElements(newArray);
  };

  return (
    <Container>
      {
        renderedImages.map((element, index) => (
          <img 
            key={String(index)}
            src={element.src} 
            className={`${element.isSelected?"selected": ""}`}
            onClick={() => setSelected(index)}
            />
        ))
      }
    </Container>
  );
}

export default Carousel;