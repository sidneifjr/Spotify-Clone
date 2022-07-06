import { ReactNode, useId } from "react";
import { DropdownWrapper } from "./styles";

interface IDropdown {
  id: string;
  children: ReactNode;
}

export const Dropdown = (props:IDropdown) => {
  const dropdownId = useId();

  return (
    <DropdownWrapper id={dropdownId}>
      {props.children}
    </DropdownWrapper>
  )
}