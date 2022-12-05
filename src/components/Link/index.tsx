import React from 'react';
import { LinkProps } from 'react-router-dom';
import { Wrapper } from './style';

export const Link: React.FC<LinkProps> = (LinkProps) => {
  return (
    <Wrapper {...LinkProps}>{LinkProps.children}</Wrapper>
  );
};
