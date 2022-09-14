import type { Game } from "../data";

export function FormatGamePrice(game: Game){
  const price = new Intl.NumberFormat('id-ID', { 
    style: 'currency',
    maximumFractionDigits: 0, 
    currency: game.currency 
  }).format(game.price);

  return price;
} 