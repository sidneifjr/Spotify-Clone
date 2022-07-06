import styled from "styled-components";

const PlaylistWrapper = styled.ul`
  width: 100%;
  margin-top: 1rem;
  gap: 24px;
  display: flex;
  justify-content: space-between;
`

const PlaylistItem = styled.li`
  max-width: 181px;
  background: #181818;
  border-radius: 12px;

  .playlist-item-link {
    padding: 1rem;
    display: block;
  }
`

const PlaylistItemImage = styled.img`
  width: 149.13px;
  height: 149.13px;
  border-radius: 12px;
  margin-bottom: 1rem;
`

const PlaylistItemTitle = styled.h3`
  font-size: 1rem;
  line-height: 1.5rem;
  color: #ffffff;
`

const PlaylistItemDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1rem;
  color: #6a6a6a;
`

export { PlaylistWrapper, PlaylistItem, PlaylistItemImage, PlaylistItemTitle, PlaylistItemDescription };
