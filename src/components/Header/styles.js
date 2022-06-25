import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  padding: 2.875rem 3.28125rem;
  
  @media(max-width: 576px) {
    padding: 2.875rem 1.6875rem;
  }

  h1 {
    text-transform: uppercase;
    font-size: 2.5rem;
    line-height: 2.39rem;
  }

  button {
    border: 0;
    padding: 0.75rem 1.8525rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    background: #214B6B;
    border-radius: 1.875rem;
    color: white;
    cursor: pointer;
    transition: all ease 200ms;
    svg {
      height: 1rem;
      width: auto;
      margin-right: 1rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;