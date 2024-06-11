"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./SideBar";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const openMenu = () => {
    setToggleMenu(true);
    document.body.style.overflowX = "hidden";
  };

  const closeMenu = () => {
    setToggleMenu(false);
    document.body.style.overflowX = "";
    window.innerWidth > 768 && setToggleMenu(false);
  };

  useEffect(() => {
    const closeMenu = () => {
      window.innerWidth > 768 && setToggleMenu(false);
    };

    closeMenu();
    window.addEventListener("resize", closeMenu);
    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setToggleMenu(false);
      }
    };

    if (toggleMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);

  return (
    <>
      <header className="absolute z-10 bg-first-color flex items-center justify-between w-full px-2 py-2">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={126} height={52} />
        </Link>
        <nav className=" hidden md:flex items-center gap-4">
          <ul className="text-third-color text-basetext-base w-full flex justify-between gap-4 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutus">Sobre Nós</Link>
            </li>
            <li>
              <Link href="/products">Produtos</Link>
            </li>
            <li>
              <Link href="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
        <button className="hidden md:block bg-second-color text-first-color px-8 py-3 rounded-md">
          Entrar em contato
        </button>
        <MenuIcon
          onClick={openMenu}
          className="bg-first-color text-third-color cursor-pointer md:hidden"
          fontSize="large"
        />
      </header>
      {toggleMenu && <SideBar ref={sidebarRef} onClick={closeMenu} />}
    </>
  );
};

export default Header;
