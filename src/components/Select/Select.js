import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const S = {
  Wrapper: styled.div`
    position: relative;
    cursor: pointer;

    background-color: ${COLORS.transparentGray15};
    border: none;
    border-radius: 8px;
    padding: 12px 16px;
    padding-right: 52px;
    height: 43px;
    width: max-content;

    color: ${COLORS.gray700};
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;

    &:hover {
      color: ${COLORS.black};
    }

    &:focus-within {
      outline: 1px solid;
    }
  `,
  Select: styled.select`
    opacity: 0;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    /* need to override height in Safari */
    appearance: none;
  `,

  Icon: styled(Icon)`
    cursor: pointer;

    position: absolute;
    top: 9px;
    right: 10px;
  `
};

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <S.Wrapper>
      <S.Select value={value} onChange={onChange}>
        {children}
      </S.Select>
      {displayedValue}
      <S.Icon id='chevron-down' />
    </S.Wrapper>
  );
};

export default Select;
