import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  .rdtPicker {
    background: #ffffff;
    border: 1px solid #e6e5f2;
    border-radius: 28px;
  }

  .rdtPicker td.rdtOld,
  .rdtPicker td.rdtNew {
    color: #999999;
    opacity: 0.4;
  }

  .rdtPicker th {
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;

    color: #232129;

    text-align: center;

    padding: 0.5rem 0;
  }

  .rdtPicker td.rdtToday {
    position: relative;
    border-radius: 8px;
    border: 1px solid #41434b;
  }
  .rdtPicker td.rdtToday:before {
    display: none;
  }
  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: #41434b;
    border-radius: 8px;
    color: #fff;
  }
  .rdtPicker td.rdtActive.rdtToday:before {
    border-bottom-color: #fff;
  }

  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: #41434b;
    border-radius: 8px;
    color: #fff;
  }

  .rdtPicker td,
  .rdtPicker th {
    font-family: Mulish;

    color: #5a5e69;

    padding: 0.5rem 0.75rem;
  }

  .rdtPicker td {
    cursor: pointer;
  }

  .rdtPicker td.rdtDisabled,
  .rdtPicker td.rdtDisabled:hover {
    background: none;
    color: #979191;
    text-decoration: line-through;
    cursor: default;
  }

  .rdtPicker td span.rdtDisabled,
  .rdtPicker td span.rdtDisabled:hover {
    background: none;
    color: #979191;
    cursor: not-allowed;
  }
`;
