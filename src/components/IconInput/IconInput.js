import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const S = {
  Wrapper: styled.div`
    border-bottom: 1px solid ${COLORS.black};
    position: relative;
    padding: 4px 2px;
    color: ${COLORS.gray700};
    width: ${({ $width }) => `${$width}px`};

    &:hover {
      color: ${COLORS.black};
    }

    &:focus-within {
      outline: 2px solid;
      outline: 2px auto -webkit-focus-ring-color;
      outline-offset: 2px;
    }
  `,
  Label: styled.label`
    position: absolute;
    bottom: 4px;
    left: 0;
  `,
  NativeInput: styled.input`
    border: none;
    padding: 0;
    width: 100%;
    padding-inline-start: ${({ $hasIcon }) => $hasIcon && '24px'};
    color: ${COLORS.gray700};

    &::placeholder {
      color: ${COLORS.gray500};
    }

    &:hover {
      color: ${COLORS.black};
    }

    &:focus {
      color: ${COLORS.gray700};
      outline: none;
    }
  `
};

const IconInput = ({ icon, id, width = 250, size, placeholder }) => {
  const hasIcon = Boolean(icon);

  return (
    <S.Wrapper $width={width}>
      {hasIcon && (
        <S.Label htmlFor={id}>
          <Icon id={icon} size={16} />
        </S.Label>
      )}
      <S.NativeInput id={id} placeholder={placeholder} $hasIcon={hasIcon} />
    </S.Wrapper>
  );
};

export default IconInput;
