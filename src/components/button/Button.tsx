import React from 'react';
import { ButtonProps } from '@mui/material';
import { buttonsMap, ButtonTypes } from './constants';

interface Props extends ButtonProps {
  buttonType: ButtonTypes;
}

export const Button: React.FC<Props> = ({ buttonType, ...rest }) => {
  const RenderButton = buttonsMap[buttonType];

  return <RenderButton {...rest}></RenderButton>;
};
