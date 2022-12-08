import React from 'react';
import { Link, Vexile } from '@/components';

export const Sub: React.FC = () => {
  return (
    <Vexile fillx filly x='center' y='center'>
      <h1>bye</h1>
      <Link to='/'>메인페이지로</Link>
    </Vexile>
  );
};
