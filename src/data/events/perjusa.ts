export type detailperjusa = {
  id: string;
  name: string;
  thumbnailImgUrl: string;
  participant: string[];
  class:string;
}


export const detailperjusa: detailperjusa[] =[
  {
    id:"1",
    name: 'Camping',
    participant: ['XI RPL', 'X TKJ', 'XII MM'],
    class: 'XI RPL',
    thumbnailImgUrl: "public/assets/camping"
  },
  {
    id:"2",
    name: 'Jurit Malam',
    participant: ['XII RPL', 'X RPL', 'X MM' ],
    class: 'X MM',
    thumbnailImgUrl: "public/assets/juritmalam"
  }
]