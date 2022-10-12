export type detaillomba17 = {
  id: string;
  name: string;
  thumbnailImgUrl: string;
  participant: string[];
  winner:string;
}


export const detaillomba17: detaillomba17[] =[
  {
    id:"1",
    name: 'Lomba Lari',
    participant: ['XI RPL', 'X TKJ', 'XII MM'],
    winner: 'XI RPL',
    thumbnailImgUrl: "public/assets/lombalari"
  },
  {
    id:"2",
    name: 'Masukan Pensil Dalam Botol',
    participant: ['XII RPL', 'X RPL', 'X MM' ],
    winner: 'X MM',
    thumbnailImgUrl: "public/assets/masukanpensildalambotol"
  }
]