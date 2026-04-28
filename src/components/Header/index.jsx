import { Headerdiv, Nav, Logo, Button } from "./styles";

export default function Header() {
  return (
    <Headerdiv>
      <Nav>
        <a href="#">The restaurant</a>
        <a href="#">The menu</a>
        <a href="#">Customer reviews</a>
      </Nav>

      <Logo>L'ÉLITE FRANÇAISE</Logo>

      <Nav>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
        <a href="#">Chefs</a>
        <a href="#">News</a>
      </Nav>

      <Button>Book now</Button>
    </Headerdiv>
  );
}
