import { useState } from "react";
import { Heart, HeartFill } from "styled-icons/bootstrap";
import { Play } from "styled-icons/boxicons-regular";
import { IconWrapper, PlayButton } from "../Button/styles"

import { PlayerArtistInfo, PlayerArtistInfoImage, PlayerArtistInfoText, PlayerArtistInfoTextSubtitle, PlayerArtistInfoTextTitle, PlayerControls, PlayerOptions, PlayerSliderWrapper, PlayerWrapper } from "./styles"
import { Labels } from "../Label";
import { PlayerSlider } from "./PlayerSlider";

export const Player = (props:any) => {
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    setLike(!like);
  }

  return (
    <PlayerWrapper>
      <PlayerArtistInfo>
        <PlayerArtistInfoImage>{props.artistImage}</PlayerArtistInfoImage>

        <PlayerArtistInfoText>
          <PlayerArtistInfoTextTitle>{props.artistSingle || "Play for Today"}</PlayerArtistInfoTextTitle>
          <PlayerArtistInfoTextSubtitle>{props.artistName || "The Cure"}</PlayerArtistInfoTextSubtitle>
        </PlayerArtistInfoText>

        <IconWrapper onClick={likeHandler}>
          {like ? <HeartFill size={20} fill="#fff" /> : <Heart size={20} fill="#fff" />}
        </IconWrapper>
      </PlayerArtistInfo>

      <PlayerControls>
        <PlayButton>
          <Play size={32} />
        </PlayButton>

        <PlayerSliderWrapper>
          <Labels>00:00</Labels>

          <PlayerSlider min={0} max={100}></PlayerSlider>

          <Labels>00:00</Labels>
        </PlayerSliderWrapper>
      </PlayerControls>

      <PlayerOptions>
        
      </PlayerOptions>
    </PlayerWrapper>
  )
}