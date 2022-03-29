import styled from 'styled-components';

type PageTitleType = {
  fontSize?: string;
  lineHeight?: string;
};

export const PageTitle = styled.div<PageTitleType>`
  display: flex;
  align-items: center;

  width: max-content;

  h3 {
    display: flex;
    align-items: center;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.5rem;

    letter-spacing: 0.04rem;

    color: var(--secundaria2);
  }
`;
