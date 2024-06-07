"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./SideBar";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const menuToggle = () => setToggleMenu(!toggleMenu);

  useEffect(() => {
    const closeMenu = () => {
      window.innerWidth > 800 && setToggleMenu(false);
    };
    closeMenu();
    window.addEventListener("resize", closeMenu);
    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  });

  return (
    <>
      <header className="absolute z-0 bg-first-color flex items-center justify-between w-full px-2 py-2">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={126} height={52} />
        </Link>
        <nav></nav>
        <div onClick={menuToggle}>
          <MenuIcon
            className="bg-first-color text-third-color cursor-pointer"
            fontSize="large"
          />
        </div>
      </header>
      {toggleMenu && <SideBar onClick={menuToggle} />}
    </>
  );
};

export default Header;
