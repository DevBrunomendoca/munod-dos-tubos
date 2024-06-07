"use client";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

import { FunctionComponent } from "react";

interface SideBarProps {
  onClick: () => void;
}

const SideBar: FunctionComponent<SideBarProps> = ({ onClick }) => {
  return (
    <div className="absolute z-10 right-0 w-4/6 h-full bg-first-color flex items-end flex-col px-3 py-5 animate-[showSideBar_.8s_ease-in-out]">
      <CloseIcon
        onClick={onClick}
        className="bg-first-color text-third-color cursor-pointer"
        fontSize="large"
      />
      <nav>
        <ul className="text-third-color w-full flex flex-col gap-6 text-end py-10">
          <li onClick={onClick}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={onClick}>
            <Link href="/aboutus">Sobre Nós</Link>
          </li>
          <li onClick={onClick}>
            <Link href="/product">Produtos</Link>
          </li>
          <li onClick={onClick}>
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
      <button>Text Button</button>
    </div>
  );
};

export default SideBar;
