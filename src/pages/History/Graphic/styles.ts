import styled from 'styled-components';

type StyledGraphicType = {
  compact: boolean;
  compactCalendar: boolean;
};

export const Container = styled.div<StyledGraphicType>`
  width: ${props =>
    props?.compactCalendar
      ? `calc(100vw - 3.75rem - 2rem - ${
          props?.compact ? '130px' : '316px'
        } - 3.75rem - 4rem)`
      : `calc(100vw - 328.625px - 3.75rem - 2rem - ${
          props?.compact ? '130px' : '316px'
        } - 3.75rem - 4rem)`};
  height: 400px;

  margin: 0 auto;

  svg {
    position: absolute;
  }

  @media (max-width: 1023px) {
    width: calc(100vw - 4rem - 4rem);
  }

  @media (max-width: 425px) {
    width: calc(100vw - 5.5rem);

    svg {
      margin-left: -2rem;
    }
  }
`;
