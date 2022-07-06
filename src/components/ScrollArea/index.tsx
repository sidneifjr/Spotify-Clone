import * as ScrollArea from '@radix-ui/react-scroll-area';
import { styled } from '@stitches/react';

const SCROLLBAR_SIZE = 10;

const StyledScrollArea = styled(ScrollArea.Root, {
  width: "100%",
  height: "calc(100% - 101px)",
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: `0 2px 10px #000`,
  paddingTop: 88,
  paddingRight: 32,
  paddingLeft: 32,
});

const StyledViewport = styled(ScrollArea.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
});

const StyledScrollbar = styled(ScrollArea.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  background: 'transparent',
  transition: 'background 160ms ease-out',
  '&:hover': { background: '#202020' },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

const StyledThumb = styled(ScrollArea.Thumb, {
  flex: 1,
  background: "hsla(0,0%,100%,.3)",
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

const StyledCorner = styled(ScrollArea.Corner, {
  background: "#cccccc",
});

export const ScrollableArea = (props:any) => {
  return (
    <StyledScrollArea>
      <StyledViewport>
        {props.children}
      </StyledViewport>

      <StyledScrollbar orientation="vertical">
        <StyledThumb />
      </StyledScrollbar>

      <StyledCorner />
    </StyledScrollArea>
  )
}
