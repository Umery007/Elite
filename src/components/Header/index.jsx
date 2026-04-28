import { useState, useEffect } from "react";
import {
  Headerdiv,
  NavLeft,
  NavRight,
  Logo,
  Button,
} from "./styles";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Headerdiv className={scrolled ? "scrolled" : ""}>
      <NavLeft>
        <a href="#">The restaurant</a>
        <a href="#">The menu</a>
        <a href="#">Customer reviews</a>
      </NavLeft>

      <Logo>L'ÉLITE FRANÇAISE</Logo>

      <NavRight>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
        <a href="#">Chefs</a>
        <a href="#">News</a>
        <Button>Book now</Button>
      </NavRight>
    </Headerdiv>
  );
}