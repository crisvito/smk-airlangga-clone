
export type About = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  excerpt: any;
  content: any;
  detail: DetailAbout[];
  heroImgUrl: string;
}

export type DetailAbout = {
  id: string;
  name: string;
  body: string;
  imgDetail: string;
}

export const dataabout: About[] =[
  {
    id: '1',
    name:'Jurusan',
    slug:'jurusan',
    logo: 'Backpack',
    excerpt:'SMK Airlangga Balikpapan memiliki bidang jurusan IT dan Manegemen. Jurusan IT Memiliki 3 kejuruan yaitu Multimedia, Rekayasa Perangkat Lunak,Teknikl Komputer dan Jaringan, Sedangkan Jurusan Managemen Memiliki 2 kejuruan yaitu Akuntansi dan Keuangan Lembaga, Dan Otomatisasi Tata Kelola Perkantoran.',
    content:'Jurusan yang ada di Arlangga adalah: ',
    detail: [
      {
        id: '1',
        name: 'Multimedia',
        body:'Multimedia adalah komputer untuk menyajikan dan menggabungkan teks, suara, gambar, animasi, audio, dan video dengan alat bantu dan tautan sehingga pengguna dapat melakukan navigasi, berinteraksi, berkarya, dan berkomunikasi. Multimedia sering digunakan dalam dunia informatika.',
        imgDetail:'/assets/mm',
      },
      {
        id: '2',
        name: 'Rekayasa Perangkat Lunak',
        body:'Rekayasa Perangkat Lunak adalah satu bidang profesi yang mendalami cara-cara pengembangan perangkat lunak termasuk pembuatan, pemeliharaan, manajemen organisasi pengembangan perangkat lunak dan manajemen kualitas.',
        imgDetail:'/assets/rpl',
      },
      {
        id: '3',
        name: 'Teknik Jaringan Komputer',
        body:'Teknik Jaringan Komputer dan Telekomunikasi merupakan ilmu berbasis Teknologi Informasi dan Komunikasi terkait kemampuan algoritma, dan pemrograman komputer, perakitan komputer, perakitan jaringan komputer, dan pengoperasian perangkat lunak, dan internet.',
        imgDetail:'/assets/tkj',
      },
      {
        id: '4',
        name: 'Akuntansi Dan Keuangan Lembaga',
        body:'Akuntansi adalah segala proses yang berhubungan dengan transaksi keuangan. Transaksi keuangan tersebut antara lain adalah mencatat, mengelompokkan, mengolah, menyajikan data yang berhubungan dengan keuangan. Dari informasi yang ada tersebut akan dihasilkan laporan keuangan yang akurat dan bisa menjadi bahan untuk mengambil suatu keputusan. SMK Jurusan Akuntansi dan Keuangan Lembaga (AKL) akan membekali siswa dengan kompetensi dalam mengelola seluruh transaksi keuangan.',
        imgDetail:'/assets/akl',
      },
    ], 
    heroImgUrl:'/assets/homehero'
  },
  {
    id: '2',
    name:'Sekolah Berprestasi',
    slug:'sekolah-berprestasi',
    logo: 'ThumbsUp',
    excerpt:'SMK Airlangga Balikpapan memiliki segudang prestasi yang membanggakan baik di sekolah maupun Kalimantan Timur.',
    content:'SMK Airlangga Balikpapan memiliki segudang prestasi yang membanggakan baik di sekolah maupun Kalimantan Timur.',
    detail: [
      {
        id: '',
        name: '',
        body:'',
        imgDetail:'',
      },
    ], 
    heroImgUrl:'/assets/prestasi'
  },
  {
    id: '3',
    name:'Ekstrakurikuler',
    slug:'ekstrakurikuler',
    logo: 'UsersThree',
    excerpt:'Banyak ekskul yang di minati oleh siswa dan siswi SMK Airlangga yaitu : Film (Mokaa Production) Basket Futsal Voli Bulu Tangkis Rohis Rokris Pramuka PMR PIK-R Tarung Derajat Dan lain lain',
    content:'Banyak ekskul yang di minati oleh siswa dan siswi SMK Airlangga yaitu :',
    detail: [
      {
        id: '1',
        name: 'Film (Mokaa Production)',
        body:'Ekskul ini adalah ekskul yang akan mengajarkan siswa tentang kamera SLR (Single Lense Reflex), DSLR (Digital Single Lense Reflex), dan juga menggunakan Handphone. Selain itu ekskul ini juga mengajarkan tentang teknik-teknik dalam fotografi dan videografi.',
        imgDetail:'/assets/film',
      },
      {
        id: '2',
        name: 'Basket',
        body:'Ekstrakurikuler basket merupakan media untuk mendorong prestasi non akademik, pertumbuhan fisik dan perkembangan psikis, meningkatkan kemampuan dan keterampilan dalam bermain basket supaya lebih baik, serta pembiasaan pola hidup sehat dengan berolahraga.',
        imgDetail:'/assets/basket',
      },
      {
        id: '3',
        name: 'Futsal',
        body:'Ekstrakurikuler futsal diadakan dengan tujuan menyediakan wadah untuk siswa menyalurkan hobinya dan menghadirkan corak positif kepada para siswa yaitu sifat-sifat sportifitas serta mencetak bibit-bibit baru olahragawan yang berprestasi di tingkat lokal, nasional maupun internasional.',
        imgDetail:'/assets/futsal',
      },
      {
        id: '4',
        name: 'Voli',
        body:'Ekstrakurikuler bola voli merupakan media untuk mendorong prestasi non akademik, pertumbuhan fisik dan perkembangan psikis, meningkatkan kemampuan dan keterampilan dalam bermain bola voli supaya lebih baik, serta pembiasaan pola hidup sehat dengan berolahraga.',
        imgDetail:'/assets/voli',
      },
      {
        id: '5',
        name: 'Bulu Tangkis',
        body:'Sama seperti futsal, basket, dan voli selain melatih fisik serta media untuk mendorong prestasi non ademik bulu tangkis juga baik untuk kesehatan serta kelincahan yang akan dilatih.',
        imgDetail:'/assets/bulu-tangkis',
      },
      {
        id: '6',
        name: 'Rohis',
        body:'Rohani Islam (disingkat Rohis) adalah sebuah organisasi memperdalam dan memperkuat ajaran Islam. Rohis sering disebut juga Dewan Keluarga Masjid (DKM). Rohis biasanya dikemas dalam bentuk ekstrakurikuler di sekolah menengah pertama dan sekolah menengah atas.',
        imgDetail:'/assets/rohis',
      },
      {
        id: '7',
        name: 'Rohkris',
        body:'Ekstrakurikuler Rohani Kristen merupakan salah satu ekstrakurikuler di Airlangga. Ekskul Rohkris merupakan suatu wadah dimana siswa-siswi Kristen Protestan dan Katolik dapat berkumpul untuk bersama-sama bertumbuh di dalam Tuhan, ekskul ini juga merupakan sarana untuk memberitakan Firman Tuhan melalui kegiatan-kegiatan yang diadakan.',
        imgDetail:'/assets/rohkris',
      },
      {
        id: '8',
        name: 'Pramuka',
        body:'Dari pendapat para ahli diatas dapat disimpulkan bahwa ekstrakurikuler pramuka merupakan suatu kegiatan kepramukaan yang dilaksanakan diluar jam pembelajaran di sekolah dan di luar lingkungan keluarga yang bertujuan mewadahi bakat, minat, dan potensi anak untuk dikembangkan secara terus-menerus.',
        imgDetail:'/assets/pramuka',
      },
      {
        id: '9',
        name: 'PMR',
        body:'Ekstrakurikuler Palang Merah Remaja (PMR) merupakan salah satu ekstrakurikuler yang bergerak dibidang kepalangmerahan dimana ekstrakurikuler Palang Merah Remaja (PMR) adalah wadah pembinaan anggota remaja dengan tujuan membangun dan mengembangkan karakter anggota PMR yang berpedoman pada tribakti PMR dan prinsip kepalangmerahan untuk menjadi relawan masa depan. Berkaitan dengan aspek kecerdasan sosial, salah satu sikap yang terbentuk adalah berupa kepedulian sosial yang muncul dalam kegiatan ekstrakurikuler, yang nantinya akan memberikan kontribusi penting dalam memupuk kesadaran nasional, maka dari itu penelitian ini dimaksudkan untuk mengetahui pelaksanaan kegiatan ekstrakurikuler khususnya kegiatan ekstrakurikuler Palang Merah Remaja (PMR) dalam menumbuhkan kepedulian sosial siswa.',
        imgDetail:'/assets/pmr',
      },
      {
        id: '10',
        name: 'Tarung Derajat',
        body:'Tarung Derajat adalah seni bela diri berasal dari Indonesia yang diciptakan oleh Achmad Dradjat. Ia mengembangkan teknik melalui pengalamannya bertarung di jalanan pada tahun 1960-an di Bandung. Tarung Derajat secara resmi diakui sebagai olahraga nasional dan digunakan sebagai latihan bela diri dasar oleh TNI Angkatan Darat dan Brigade Mobil Polri.',
        imgDetail:'/assets/tarung-derajat',
      },
    ], 
    heroImgUrl:'/assets/eskul'
  },
]

export function getAbout(slug: string){
  return dataabout.find(
    (about) => about.slug == slug
  )
}