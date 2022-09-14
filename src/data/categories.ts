export type Category = {
  value: string;
  name: string;
  content: any;
  games: Game[];
}
export type Game = {
  name: string;
  price: number;
  currency: string;
  tags: string[];
  platforms: string[];
  thumbnailImgUrl: string;
}

export const dataCategories: Category[] =[
  {
    value: "tab1", 
    name: "New & Trending", 
    content: "Tab one content", 
    games: [
      {
        name: 'FreestyleFootballR',
        price: 300000,
        currency: 'IDR',
        tags: ['PvP', 'Multiplayer', 'MOBA'],
        platforms: ['windows'],
        thumbnailImgUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1826980/capsule_184x69.jpg"
      },
      {
        name: 'Freedom Planet 2',
        price: 100000,
        currency: 'IDR',
        tags: ['Action', 'Multiplayer', 'Advanture'],
        platforms: ['windows'],
        thumbnailImgUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/595500/capsule_184x69.jpg"
      }
    ]
  },
  { 
    value: "tab2", 
    name: "Top Sellers", 
    content: "Tab second content",
    games: [
      {
        name: 'CyberPunk 2077',
        price: 1300000,
        currency: 'IDR',
        tags: ['Open World', 'RPG', 'Nudity'],
        platforms: ['windows'],
        thumbnailImgUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_184x69.jpg"
      },
      {
        name: 'Isonzo',
        price: 500000,
        currency: 'IDR',
        tags: ['Tactical', '3D', 'Historical'],
        platforms: ['windows' , 'mac'],
        thumbnailImgUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1556790/capsule_184x69_alt_assets_0.jpg"
      }
    ] 
  },
  { 
    value: "tab3", 
    name: "Popular Upcoming", 
    content: "Tab third content",
    games: [
      {
        name: 'FreestyleFootballR',
        price: 300000,
        currency: 'IDR',
        tags: ['PvP', 'Multiplayer', 'MOBA'],
        platforms: ['windows'],
        thumbnailImgUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1826980/capsule_184x69.jpg"
      },
      {
        name: 'Freedom Planet 2',
        price: 100000,
        currency: 'IDR',
        tags: ['Action', 'Multiplayer', 'Advanture'],
        platforms: ['windows'],
        thumbnailImgUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/595500/capsule_184x69.jpg"
      }
    ] 
  },
  { 
    value: "tab4", 
    name: "Specials", 
    content: "Tab fourth content",
    games: [
      {
        name: 'FreestyleFootballR',
        price: 300000,
        currency: 'IDR',
        tags: ['PvP', 'Multiplayer', 'MOBA'],
        platforms: ['windows'],
        thumbnailImgUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1826980/capsule_184x69.jpg"
      },
      {
        name: 'Freedom Planet 2',
        price: 1000000000000,
        currency: 'IDR',
        tags: ['Action', 'Multiplayer', 'Advanture'],
        platforms: ['windows'],
        thumbnailImgUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/595500/capsule_184x69.jpg"
      }
    ] 
  },
]