import { styled } from '@stitches/react';
import * as Slider from '@radix-ui/react-slider';

const StyledSlider = styled(Slider.Root, {
  width: 626,
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  position: 'relative',

  '&[data-orientation="horizontal"]': {
    height: 20,
  }
});

const StyledTrack = styled(Slider.Track, {
  backgroundColor: "#5E5E5E",
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',

  '&[data-orientation="horizontal"]': {
    height: 4,
  }
});

const StyledRange = styled(Slider.Range, {
  position: 'absolute',
  backgroundColor: 'white',
  borderRadius: '9999px',
  height: '100%',
});

const StyledThumb = styled(Slider.Thumb, {
  all: 'unset',
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px #000`,
  borderRadius: 10,
  // '&:hover': { backgroundColor: violet.violet3 },
  // '&:focus': { boxShadow: `0 0 0 5px ${blackA.blackA8}` },
});

export const PlayerSlider = (props:any) => (
  <StyledSlider>
    <StyledTrack>
      <StyledRange />
    </StyledTrack>

    <StyledThumb />
  </StyledSlider>
);
