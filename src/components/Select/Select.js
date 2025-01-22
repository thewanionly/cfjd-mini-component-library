import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const S = {
  Select: styled.select`
    background-color: ${COLORS.transparentGray15};
    border: none;
    border-radius: 8px;
    padding: 12px 16px;
    height: 43px;

    color: ${COLORS.gray700};
    font-size: 1rem;
    font-weight: 400;

    /* hide native chevron icon */
    appearance: none;
  `
};

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <S.Select value={value} onChange={onChange}>
      {children}
    </S.Select>
  );
};

export default Select;
