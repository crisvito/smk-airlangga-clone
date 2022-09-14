import type { Game } from "../data";

export function FormatGamePrice(game: Game){
  const price = new Intl.NumberFormat('id-ID', { 
    style: 'currency',
    maximumSignificantDigits: 2, 
    currency: game.currency 
  }).format(game.price);

  return price;
} 