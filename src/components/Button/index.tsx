import React from 'react';
import { ButtonWrapper } from './style';

export const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  ...props
}) => <ButtonWrapper {...props as any} />;
