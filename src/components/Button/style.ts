import { styled } from '@/stitches.config';

export const ButtonWrapper = styled('button', {
  background: '$buttonColor',
  color: '#fff',
  padding: '1rem 4rem',
  outline: 'none',
  border: 'none',
  borderRadius: '1rem',
  cursor: 'pointer',
  transition: 'all .2s ease',
  '&:active': {
    opacity: .6,
  },
});
