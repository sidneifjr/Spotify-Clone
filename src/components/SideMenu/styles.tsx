import styled from "styled-components";

const SideMenuWrapper = styled.aside`
  height: 100vh;
  flex-basis: 12.5%;
  background: #000000;
  padding-top: 50px;
  padding-right: 25px;
  padding-left: 25px;
  z-index: 9;
`

const SideMenuList = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const SideMenuListItem = styled.li`
  width: 100%;
  display: flex;

  .side-menu-link {
    font-size: 15px;
    line-height: 21px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.75);
    display: flex;
    align-items: center;
    transition: color ease-in-out 0.2s;

    svg {
      margin-right: 18px;
    }
  }

  &:hover {
    .side-menu-link {
      color: rgba(255, 255, 255, 1);
    }
  }
`

export { SideMenuWrapper, SideMenuList, SideMenuListItem };
