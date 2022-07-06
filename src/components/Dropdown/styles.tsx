import styled from "styled-components";

const DropdownWrapper = styled.ul`
  width: 240px;
  background: #282828;
  border: solid 2px transparent;
  position: absolute;
  top: 115%;
  right: 0;
  display: none;

  &.active {
    display: block;
  }

  li {
    border-radius: 2px;

    a {
      font-size: 0.875rem;
      line-height: 1rem;
      color: #ffffff;
      padding: 12px;
      display: block;

      &:hover {
        background-color: hsla(0,0%,100%,.1);
      }
    }
  }
`

export { DropdownWrapper };
