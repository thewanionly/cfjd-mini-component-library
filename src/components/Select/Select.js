import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const S = {
  Wrapper: styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;

    background-color: ${COLORS.transparentGray15};
    border: none;
    border-radius: 8px;
    padding: 12px 16px;
    height: 43px;

    color: ${COLORS.gray700};
    font-size: 1rem;
    font-weight: 400;

    &:hover {
      color: ${COLORS.black};
    }
  `,
  Select: styled.select`
    opacity: 0;

    position: absolute;
    top: 0;
    left: 0;
  `,
  Value: styled.span`
    cursor: pointer;

    display: inline-block;
    margin-inline-end: 24px;
  `,
  Icon: styled(Icon)`
    display: inline-block;
  `
};

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <S.Wrapper>
      <S.Select value={value} onChange={onChange}>
        {children}
      </S.Select>
      <S.Value>{displayedValue}</S.Value>
      <S.Icon id='chevron-down' />
    </S.Wrapper>
  );
};

export default Select;
