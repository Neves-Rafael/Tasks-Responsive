import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../styles/layoutBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 280px auto;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "menu top"
    "menu content";

  @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "top"
      "content";
  }
`;

export const FixedContent = styled.section`
  grid-area: top;
`;
