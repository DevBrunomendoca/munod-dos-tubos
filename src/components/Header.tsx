"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./SideBar";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["700"],
  subsets: ["latin"],
});

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const openMenu = useCallback(() => {
    setToggleMenu(true);
  }, []);

  const closeMenu = useCallback(() => {
    setToggleMenu(false);
  }, []);

  const handleResize = useCallback(() => {
    window.innerWidth > 768 && setToggleMenu(false);
  }, []);

  useEffect(() => {
    const hidden = () => {
      toggleMenu ? (document.body.style.overflow = "hidden") : "";
    };
    hidden();
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggleMenu]);

  useEffect(() => {
    setIsLoaded(true);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

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
      <header className="absolute z-10 flex items-center justify-between w-full bg-first-color">
        <div className="max-w-7xl m-auto flex items-center justify-between w-full px-2 py-2 ">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={126} height={52} />
          </Link>
          <nav className=" hidden md:flex items-center gap-4">
            <ul
              className={`text-third-color text-basetext-base w-full flex justify-between gap-4 ${lato.className}`}
            >
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
        </div>
        <MenuIcon
          onClick={() => setToggleMenu(!toggleMenu)}
          className={`block bg-first-color text-third-color cursor-pointer md:hidden ${
            isLoaded ? "hidden-initially" : ""
          }`}
          fontSize="large"
        />
      </header>
      {toggleMenu && <SideBar ref={sidebarRef} onClick={closeMenu} />}
    </>
  );
};

export default Header;
