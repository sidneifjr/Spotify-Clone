import { Heart, HouseDoorFill, PlusSquareFill, Search } from "@styled-icons/bootstrap"
import { Link } from "react-router-dom"
import { Library } from "styled-icons/boxicons-regular"
import { SideMenuList, SideMenuListItem, SideMenuWrapper } from "./styles"

const sideMenuItems = [
  {
    icon: <HouseDoorFill size={32} />,
    value: 'Início',
    key: 1
  },
  {
    icon: <Search size={32} />,
    value: 'Buscar',
    key: 2
  },
  {
    icon: <Library size={32} />,
    value: 'Sua Biblioteca',
    key: 3
  },
  {
    icon: <PlusSquareFill size={32} />,
    value: 'Criar Playlist',
    key: 4
  },
  {
    icon: <Heart size={32} />,
    value: 'Músicas Curtidas',
    key: 5
  }
]

export const SideMenu = () => {
  return (
    <SideMenuWrapper>
      <SideMenuList>
        {
          sideMenuItems.map((sideMenuItem) => {
            return (
              <SideMenuListItem key={sideMenuItem.key}>
                <Link className="side-menu-link" to="/">
                  {sideMenuItem.icon}
                  {sideMenuItem.value}
                </Link>
              </SideMenuListItem>
            )
          })
        }
      </SideMenuList>
    </SideMenuWrapper>
  )
}
