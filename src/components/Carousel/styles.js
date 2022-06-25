import styled from 'styled-components';

export const Container = styled.div`
  grid-area: carousel;
  display: flex;
  height: min-content;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  padding: 1rem 0;
  img {
    width: auto;
    transition: all 200ms ease;
    transform: scale(0.8);
    border-radius: 1.875rem;
    filter: brightness(0.7) drop-shadow(0px 0px 9px #00000050);

    &.selected {
      filter: brightness(1) drop-shadow(0px 0px 9px #00000050);
      transform: scale(1);
    }
  }
  
`;