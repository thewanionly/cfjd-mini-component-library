/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const MIN_VALUE = 0;
const MAX_VALUE = 100;

const S = {
  ProgressBar: styled.div`
    padding: 4px;
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  `,
  ProgressValue: styled.div`
    background-color: ${COLORS.primary};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: ${({ $value }) => $value >= MAX_VALUE && '4px'};
    border-bottom-right-radius: ${({ $value }) => $value >= MAX_VALUE && '4px'};
    width: ${({ $value }) => `${Math.min(Math.max($value, MIN_VALUE), MAX_VALUE)}%`};
    height: 16px;
  `
};

const ProgressBar = ({ value, size }) => {
  return (
    <S.ProgressBar role='progressbar' aria-valuenow={value}>
      <S.ProgressValue $value={value} />
    </S.ProgressBar>
  );
};

export default ProgressBar;
