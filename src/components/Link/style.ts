import { styled } from '@/stitches.config';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link, {
  color: '#147EFB',
  textDecorationLine: 'none',
  transition: 'all .2s ease',
  '&:active': {
    opacity: 0.3,
  },
});
