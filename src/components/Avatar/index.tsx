import * as Avatar from '@radix-ui/react-avatar';

interface IUserAvatar {
  src: string;
  alt: string;
}

export const UserAvatar = (props:IUserAvatar) => {
  return (
    <Avatar.Root>
      <Avatar.Image src={props.src} alt={props.alt} />
      <Avatar.Fallback />
    </Avatar.Root>
  )
}