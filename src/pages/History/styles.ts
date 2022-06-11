import styled from 'styled-components';

type StyledDivType = {
  compactCalendar: boolean;
};

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
`;

export const HistoryContext = styled.div`
  width: 100%;
  height: 100%;

  background: #ffffff;
  border: 1px solid #e6e5f2;
  border-radius: 28px;

  padding: 2rem;

  > div:nth-child(2) {
    /* background-color: red; */

    display: flex;
    justify-content: space-around;
    justify-items: center;
    align-content: center;

    flex-wrap: wrap;
    white-space: nowrap;

    padding: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Heeader = styled.header`
  .rdt {
    position: absolute;
  }

  @media (max-width: 768px) {
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 28px;
  }

  > div {
    width: 23rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div {
      width: 100%;

      margin-top: 0.5rem;
    }
  }
`;

export const HeaderSubtitle = styled.p`
  display: flex;
  align-items: center;

  font-family: Mulish;
  font-weight: 500;

  color: #e7b46c;

  margin-top: 8px;

  span {
    display: flex;
    align-items: center;
  }

  span + span::before {
    content: '';
    width: 1px;
    height: 12px;
    background: #e7b46c;
    margin: 0 8px;
  }

  svg {
    margin-left: 0.5rem;

    cursor: pointer;
  }
`;

export const CalendarInside = styled.div<StyledDivType>`
  .rdt {
    display: none;
  }

  @media (max-width: 1023px) {
    pointer-events: all;

    .rdt {
      display: ${props => (props?.compactCalendar ? 'none' : 'inherit')};

      margin-top: 0.5rem;
    }

    .rdtPicker {
      /* position: relative; */
    }
  }
`;
export const WeatherHistorySection = styled.div``;

export const WeatherGraphicSection = styled.div`
  h3 {
    font-family: Mulish;

    padding: 1rem;
  }
`;

export const CalendarOut = styled.div<StyledDivType>`
  display: ${props => (props?.compactCalendar ? 'none' : 'inherit')};
  margin-left: ${props => (props?.compactCalendar ? '0' : '2rem')};
  opacity: ${props => (props?.compactCalendar ? 0 : 1)};

  transition-property: display, opacity, transform !important;
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;

  @media (max-width: 1023px) {
    display: none;
  }
`;
