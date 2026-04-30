import { useState, useEffect } from "react";
import {
  Headerdiv,
  NavLeft,
  NavRight,
  Logo,
  Button,
  MenuButton,
  MobileMenu,
} from "./styles";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Headerdiv className={`${scrolled ? "scrolled" : ""}`}>
      <MenuButton onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </MenuButton>

      <NavLeft>
        <a href="#">The restaurant</a>
        <a href="#">The menu</a>
        <a href="#">Main Chef</a>
      </NavLeft>

      <Logo>L'ÉLITE FRANÇAISE</Logo>

      <NavRight>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
        <a href="#">News</a>
        <Button>Book now</Button>
      </NavRight>

      <MobileMenu className={menuOpen ? "open" : ""}>
        <a href="#">The restaurant</a>
        <a href="#">The menu</a>
        <a href="#">Main Chef</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
        <a href="#">News</a>
        <Button>Book now</Button>
      </MobileMenu>
    </Headerdiv>
  );
}