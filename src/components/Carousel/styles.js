import styled from 'styled-components';

export const CarouselContainer = styled.div`
  grid-area: carousel;
  display: flex;
  padding: 1rem 0;
  width: 100%;
  overflow-x: hidden;
  height: min-content;
  scroll-behavior: smooth;

  div {
    &:first-child {
      margin-left: 12.5%;
    }

    &:last-child  {
      margin-right:12.5%;
    }

    img {
      width: 51.375rem;
      transition: all 200ms ease; 
      border-radius: 1.875rem;
      filter: brightness(0.7) drop-shadow(0px 0px 9px #00000050);

      transform: scale(0.7);
      &.grow {
        transform: scale(1);
        filter: brightness(1) drop-shadow(0px 0px 9px #00000050);
      }
    }
  }
  
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: min-content;
  overflow-x: hidden;
`;

export const DottedScroll = styled.ul`
  display: flex;
  margin: 0 auto;
  gap: 24px;
  list-style: none;
  li {
    width: 15px;
    height: 15px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
    transition: all 200ms ease;
    &.selected {
      background: rgba(255, 255, 255, 1);
    }
  }
`;  