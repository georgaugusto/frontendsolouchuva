import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: column;

  padding: 0.5rem;

  > div {
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
  }

  &:hover {
    opacity: 0.75;

    cursor: pointer;
  }
`;

export const Header = styled.div`
  span {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;

    letter-spacing: 0.598334px;

    color: #242424;
  }

  svg {
    display: none;
  }
`;

export const Content = styled.div`
  font-family: 'Mulish';
  font-style: normal;
  font-size: 16px;
  line-height: 18px;
`;

export const HeaderContent = styled.div``;

export const BodyContent = styled.div`
  margin: 0.313rem;
`;

export const FootContent = styled.div`
  p {
    font-style: bold;
    font-size: 12px;
  }
`;
