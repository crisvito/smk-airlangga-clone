
export type About = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  content: any;
  heroImgUrl: string;
}

export const dataabout: About[] =[
  {
    id: '1',
    name:'Jurusan',
    slug:'jurusan',
    logo: 'Backpack',
    content:'SMK Airlangga Balikpapan memiliki bidang jurusan IT dan Manegemen. Jurusan IT Memiliki 3 kejuruan yaitu Multimedia, Rekayasa Perangkat Lunak,Teknikl Komputer dan Jaringan, Sedangkan Jurusan Managemen Memiliki 2 kejuruan yaitu Akuntansi dan Keuangan Lembaga, Dan Otomatisasi Tata Kelola Perkantoran.',
    heroImgUrl:'/assets/homehero'
  },
  {
    id: '2',
    name:'Sekolah Berprestasi',
    slug:'sekolah-berprestasi',
    logo: 'ThumbsUp',
    content:'SMK Airlangga Balikpapan memiliki segudang prestasi yang membanggakan baik di sekolah maupun Kalimantan Timur.',
    heroImgUrl:'/assets/prestasi'
  },
  {
    id: '3',
    name:'Ekstrakurikuler',
    slug:'ekstrakurikuler',
    logo: 'UsersThree',
    content:'Banyak ekskul yang di minati oleh siswa dan siswi SMK Airlangga yaitu : Film (Mokaa Production) Basket Futsal Voli Bulu Tangkis Rohis Rokris Pramuka PMR PIK-R Tarung Derajat Dan lain lain',
    heroImgUrl:'/assets/eskul'
  },
]

export function getAbout(slug: string){
  return dataabout.find(
    (about) => about.slug == slug
  )
}