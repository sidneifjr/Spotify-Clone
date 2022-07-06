import styled from "styled-components";

const PlayerWrapper = styled.div`
  background: #181818;
  border-top: solid 1px #282828;
  padding: 20px 15px;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
`

const PlayerArtistInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const PlayerArtistInfoImage = styled.img`
  height: 60px;
  width: 60px;
`

const PlayerArtistInfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PlayerArtistInfoTextTitle = styled.h4`
  font-size: 0.875rem;
  line-height: 1rem;
  color: #ffffff;
`

const PlayerArtistInfoTextSubtitle = styled.p`
  font-size: 0.6875rem;
  line-height: 1rem;
  color: #ffffff;
`

const PlayerControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PlayerSliderWrapper = styled.div`
  position: relative;
  gap: 12px;
  display: flex;
  align-items: center;
`

const PlayerOptions = styled.div`

`

export {
  PlayerWrapper,
  PlayerArtistInfo,
  PlayerArtistInfoImage,
  PlayerArtistInfoText,
  PlayerArtistInfoTextTitle,
  PlayerArtistInfoTextSubtitle,
  PlayerControls,
  PlayerSliderWrapper,
  PlayerOptions
};
