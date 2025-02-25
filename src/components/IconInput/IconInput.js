import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const DEFAULT_FONT_SIZE = 16;
const pxToRem = (px) => `${px / DEFAULT_FONT_SIZE}rem`;

const SIZES = {
  small: {
    wrapper: css`
      border-bottom: 1px solid ${COLORS.black};
      padding: 4px 2.5px 3px 0;
    `,
    icon: css`
      bottom: 3px;
    `,
    iconSize: 16,
    input: css`
      font-size: ${pxToRem(14)};
      padding-inline-start: 24px;
    `
  },
  large: {
    wrapper: css`
      border-bottom: 2px solid ${COLORS.black};
      padding: 8px 4px 5px 0;
    `,
    icon: css`
      bottom: 4px;
    `,
    iconSize: 24,
    input: css`
      font-size: ${pxToRem(18)};
      padding-inline-start: 36px;
    `
  }
};

const S = {
  Wrapper: styled.label`
    display: block;
    position: relative;
    color: ${COLORS.gray700};
    width: ${({ $width }) => `${$width}px`};
    ${({ $size }) => SIZES[$size].wrapper};

    &:hover {
      color: ${COLORS.black};
    }

    &:focus-within {
      outline: 2px solid;
      outline: 2px auto -webkit-focus-ring-color;
      outline-offset: 2px;
    }
  `,
  IconWrapper: styled.div`
    position: absolute;
    left: 0;

    ${({ $size }) => SIZES[$size].icon};
  `,
  NativeInput: styled.input`
    border: none;
    padding: 0;
    width: 100%;
    font-weight: 400;
    line-height: normal;
    color: inherit;
    font-weight: 700;
    ${({ $size }) => SIZES[$size].input};

    ${({ $hasIcon }) =>
      !$hasIcon &&
      `
       padding-inline-start: 0;
    `};

    &::placeholder {
      font-weight: 400;
      color: ${COLORS.gray500};
    }

    &:focus {
      color: ${COLORS.gray700};
      outline: none;
    }
  `
};

const IconInput = ({ label, icon, width = 250, size = 'small', ...props }) => {
  const hasIcon = Boolean(icon);

  return (
    <S.Wrapper $width={width} $size={size}>
      {hasIcon && (
        <S.IconWrapper $size={size}>
          <Icon id={icon} size={SIZES[size].iconSize} />
        </S.IconWrapper>
      )}
      <VisuallyHidden>{label}</VisuallyHidden>
      <S.NativeInput $hasIcon={hasIcon} $size={size} {...props} />
    </S.Wrapper>
  );
};

export default IconInput;
