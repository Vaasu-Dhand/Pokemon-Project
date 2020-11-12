export default function colorScheme(pokemonType) {
  switch (pokemonType) {
    case "bug":
      return "#A6B91A";
    case "dark":
      return "#705848";
    case "dragon":
      return "#7038F8";
    case "electric":
      return "#F8D030";
    case "fairy":
      return "#EE99AC";
    case "fighting":
      return "#C03028";
    case "fire":
      return "#F08030";
    case "flying":
      return "#A890F0";
    case "ghost":
      return "#71C558";
    case "grass": 
      return "#90c744";
    case "ground":
      return "#E0C068";
    case "ice":
      return "#98D8D8";
    case "normal":
      return "#A8A878";
    case "poision":
      return "#A040A0";
    case "psychic":
      return "#F85888";
    case "rock":
      return "#B8A038";
    case "steel":
      return "#B8B8D0";
    case "water":
      return "#6890F0";
  
    default:
      return "#FFF000"
  }
}