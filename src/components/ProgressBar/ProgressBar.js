/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const MIN_VALUE = 0;
const MAX_VALUE = 100;

const SIZES = {
  small: {
    bar: css`
      border-radius: 4px;
    `,
    value: css`
      height: 8px;
    `
  },
  medium: {
    bar: css`
      border-radius: 4px;
    `,
    value: css`
      height: 12px;
    `
  },
  large: {
    bar: css`
      padding: 4px;
      border-radius: 8px;
    `,
    value: css`
      height: 16px;
    `
  }
};

const S = {
  ProgressBar: styled.div`
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

    ${({ $size }) => SIZES[$size].bar};
  `,
  ProgressValueWrapper: styled.div`
    border-radius: 4px;
    overflow: hidden;
  `,
  ProgressValue: styled.div`
    background-color: ${COLORS.primary};
    width: ${({ $value }) => `${Math.min(Math.max($value, MIN_VALUE), MAX_VALUE)}%`};
    ${({ $size }) => SIZES[$size].value};
  `
};

const ProgressBar = ({ value, size = 'medium' }) => {
  return (
    <S.ProgressBar role='progressbar' aria-valuenow={value} $size={size}>
      <S.ProgressValueWrapper>
        <S.ProgressValue $value={value} $size={size} />
      </S.ProgressValueWrapper>
    </S.ProgressBar>
  );
};

export default ProgressBar;
