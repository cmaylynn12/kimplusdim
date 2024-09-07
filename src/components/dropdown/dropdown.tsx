import clsx from "clsx";
import { useState } from "react";
import "./dropdown.css"

interface DropdownProps {
  toggle: () => void;
  isOpen: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ toggle, isOpen }: DropdownProps) => {

  return (
    <div id="menu" onClick={() => toggle()} className={clsx({'open': isOpen})}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Dropdown;