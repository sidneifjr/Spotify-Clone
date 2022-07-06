import { Link } from "react-router-dom"
import { PlaylistWrapper, PlaylistItem, PlaylistItemImage, PlaylistItemTitle, PlaylistItemDescription } from "./styles"

export const Playlists = () => {
  let playlistsItems = [
    {
      title: 'James Brown',
      description: 'Artist',
      key: 1
    },
    {
      title: 'James Brown',
      description: 'Artist',
      key: 2
    },
    {
      title: 'James Brown',
      description: 'Artist',
      key: 3
    },
    {
      title: 'James Brown',
      description: 'Artist',
      key: 4
    },
    {
      title: 'James Brown',
      description: 'Artist',
      key: 5
    },
    {
      title: 'James Brown',
      description: 'Artist',
      key: 6
    },
    {
      title: 'James Brown',
      description: 'Artist',
      key: 7
    },
    {
      title: 'James Brown',
      description: 'Artist',
      key: 8
    },
  ]

  return (
    <PlaylistWrapper>
      {
        playlistsItems.map((playlistsItem) => {
          return (
            <PlaylistItem key={playlistsItem.key}>
              <Link className="playlist-item-link" to="/playlist">
                <PlaylistItemImage src="" alt="Playlist Item" />
                <PlaylistItemTitle>{playlistsItem.title}</PlaylistItemTitle>
                <PlaylistItemDescription>{playlistsItem.description}</PlaylistItemDescription>
              </Link>
            </PlaylistItem>
          )
        })
      }
    </PlaylistWrapper>
  )
}
