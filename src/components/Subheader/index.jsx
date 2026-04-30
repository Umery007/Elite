// Subheader/index.jsx
import { Subheaderdiv } from "./styles";

const pratos = [
  "Coq au vin",
  "Boeuf bourguignon",
  "Ratatouille",
  "Quiche Lorraine",
  "Croque monsieur",
  "Croque madame",
  "Soupe à l’oignon",
  "Bouillabaisse",
  "Cassoulet",
  "Steak frites",
  "Escargots de Bourgogne",
  "Foie gras",
  "Confit de canard",
  "Magret de canard",
  "Salade niçoise",
  "Tarte Tatin",
  "Crêpe Suzette",
  "Crêpes salgadas",
  "Soufflé de queijo",
  "Soufflé de chocolate",
  "Gratin dauphinois",
  "Blanquette de veau",
  "Pissaladière",
  "Chateaubriand",
  "Terrine",
  "Rillettes",
  "Hachis parmentier",
  "Poulet rôti",
  "Baguette com queijo brie",
  "Omelette française",
  "Pain au chocolat",
  "Croissant",
  "Éclair",
  "Mille-feuille",
  "Macaron",
  "Profiteroles",
  "Clafoutis",
  "Madeleines",
  "Brioche",
  "Tarte au citron",
  "Tarte aux pommes",
  "Fromage fondue",
  "Raclette",
  "Vichyssoise",
  "Salade lyonnaise",
  "Endives au jambon",
  "Navarin d’agneau",
  "Poulet basquaise",
  "Flammekueche",
  "Paris-Brest"
];

const Subheader = () => {
  return (
    <Subheaderdiv>
      <div className="marquee-container">
        <div className="marquee-text">
          {pratos.join(" ★ ")}
        </div>
      </div>
    </Subheaderdiv>
  );
};

export default Subheader;