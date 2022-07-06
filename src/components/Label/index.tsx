import { styled } from '@stitches/react';
import * as Label from '@radix-ui/react-label';
import { ReactNode } from 'react';

interface ILabel {
  children: ReactNode
}

const StyledLabel = styled(Label.Root, {
  fontSize: "0.6875rem",
  lineHeight: "1rem",
  fontWeight: 500,
  color: 'white',
  userSelect: 'none',
});

export const Labels = (props:ILabel) => {
  return (
    <StyledLabel>{props.children}</StyledLabel>
  )
}
