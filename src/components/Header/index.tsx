import { HeaderAvatarName, HeaderHistory, HeaderUserArea, HeaderWrapper } from './styles';
import { DropdownWrapper } from '../Dropdown/styles';
import { UserAvatar } from '../Avatar';

import { Button } from '../Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftS, ArrowRightS } from 'styled-icons/remix-line';
import { CallToAction } from '../Button/styles';

// interface IHeader {

// }

const dropdownItems = [
  {
    value: 'Conta',
    key: 1
  },
  {
    value: 'Perfil',
    key: 2
  },
  {
    value: 'Faça upgrade para o Premium',
    key: 3
  },
  {
    value: 'Sessão Particular',
    key: 4
  },
  {
    value: 'Configurações',
    key: 5
  },
  {
    value: 'Sair',
    key: 6
  },
]

export const Header = () => {
  let [dropdown, setDropdown] = useState(false);

  let open = (e:any) => {
    setDropdown(true);
  }

  let close = (e:any) => {
    setDropdown(false);
  }
  
  return (
    <HeaderWrapper>
      <HeaderHistory>
        <Link to="/about">
          <Button>
            <ArrowLeftS />
          </Button>
        </Link>

        <Link to="/">
          <Button>
            <ArrowRightS />
          </Button>
        </Link>
      </HeaderHistory>

      <CallToAction>Faça upgrade</CallToAction>

      <HeaderUserArea onClick={open} onBlur={close}>
        <UserAvatar src="https://via.placeholder.com/36x36" alt="User avatar" />
        <HeaderAvatarName>Fulano</HeaderAvatarName>

        <DropdownWrapper className={dropdown ? 'active' : ''}>
          {
            dropdownItems.map((dropdownItem) => {
              return (
                <li key={dropdownItem.key}>
                  <a onClick={(event) => event.preventDefault()} href="#" rel='noopener noreferrer'>{dropdownItem.value}</a>
                </li>
              )
            })
          }
        </DropdownWrapper>
      </HeaderUserArea>
    </HeaderWrapper>
  )
}
