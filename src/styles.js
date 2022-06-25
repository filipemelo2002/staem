import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-areas: 
    "header"
    "carousel"
    "content"
  ;
  grid-template-rows: min-content;
  max-width: 90rem;
  margin: 0 auto;
`;