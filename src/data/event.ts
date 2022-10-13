
export type Event = {
  id: string;
  name: string;
  slug: string;
  content: any;
  heroImgUrl: string;
}

export const dataevent: Event[] =[
  {
    id: "1", 
    name: "Lomba 17 an",
    slug: "lomba17-an",
    content: "SMK Airlangga Balikpapan merayakan 17 Agustus dengan lomba lomba yang bervariasi dan juga menyenangkan, dengan adanya lomba tersebut SMK Kesehatan Airlangga, dan SMP Plus Airlangga juga bergabung di lomba tersebut. lomba tersebut berlangsung dari pagi sampai sore di hari senin selasa kamis dan jumat. lomba tersebut berguna untuk melatih kerja sama antara teman, melatih kreatifitas anak, mandiri, dan percaya diri. dan pembacaan pemenang lomba di tanggal 22 Agustus 2022 SMK Airlangga Balikpapan merayakan 17 Agustus dengan lomba lomba yang bervariasi dan juga menyenangkan, dengan adanya lomba tersebut SMK Kesehatan Airlangga, dan SMP Plus Airlangga juga bergabung di lomba tersebut. lomba tersebut berlangsung dari pagi sampai sore di hari senin selasa kamis dan jumat. lomba tersebut berguna untuk melatih kerja sama antara teman, melatih kreatifitas anak, mandiri, dan percaya diri. dan pembacaan pemenang lomba di tanggal 22 Agustus 2022 SMK Airlangga Balikpapan merayakan 17 Agustus dengan lomba lomba yang bervariasi dan juga menyenangkan, dengan adanya lomba tersebut SMK Kesehatan Airlangga, dan SMP Plus Airlangga juga bergabung di lomba tersebut. lomba tersebut berlangsung dari pagi sampai sore di hari senin selasa kamis dan jumat. lomba tersebut berguna untuk melatih kerja sama antara teman, melatih kreatifitas anak, mandiri, dan percaya diri. dan pembacaan pemenang lomba di tanggal 22 Agustus 2022", 
    heroImgUrl:"/assets/lomba17an",
  },
  {
    id: "2", 
    name: "Perjusa", 
    slug: "perjusa",
    content: "Perjusa adalah perkemahan jumat-sabtu . tujuan dari perjusa adalah untuk meningkatkan kemandirian para peserta kemah di alam luar (outdoor) . Banyak sekali perubahan yang dialami peserta kemah , yang dirasakan nya adalah bisa mengenal alam lebih jauh,bisa mandiri dalam kehidupan dan bisa menjadi percaya diri untuk berbicara kepada temannya walaupun belum mengenal satu sama lain antar peserta dalam jangka waktu sehari .",
    heroImgUrl: "/assets/perjusa", 
  },
  {
    id: "3", 
    name: "1 MUHARRAM 1444", 
    slug: "1-muharram-1444",
    content: "Muharam[1] (bahasa Arab: مُحَرَّمٌ, translit. Muḥarram‎) adalah bulan pertama dalam kalender Hijriah. Muharam berasal dari kata yang artinya ‘diharamkan’ atau ‘dipantang’, yaitu dilarang melakukan peperangan atau pertumpahan darah. Tanggal 1 Muharam adalah hari Tahun Baru dalam agama Islam. Dalam bahasa Arab, kata Muharram memiliki arti ‘terlarang’, sebab di bulan tersebut semua tindakan yang melanggar hukum dilarang, salah satunya adalah berperang. Penetapan penanggalan hijriyah diprakarsai oleh khalifah Umar bin Khattab yang telah disetujui sahabat lainnya . ",
    heroImgUrl:"/assets/1muharram1444", 
  },
  {
    id: "4", 
    name: "Mpls Smk airlangga", 
    slug: "mplssmkairlangga",
    content: "Masa Pengenalan Lingkungan Sekolah (MPLS), juga dikenal sebagai Masa Orientasi Siswa (MOS) atau Masa Orientasi Peserta Didik Baru (MOPD), merupakan sebuah kegiatan yang umum dilaksanakan di sekolah setiap awal tahun ajaran guna menyambut kedatangan para peserta didik baru. Masa orientasi lazim dijumpai di tingkat SMP dan SMA. Hampir seluruh sekolah negeri maupun swasta menggunakan cara itu untuk mengenalkan almamater pada peserta didik baru. Pada perguruan tinggi, kegiatan serupa dikenal dengan Orientasi Studi dan Pengenalan Kampus (disingkat Ospek).",
    heroImgUrl:"/assets/mplssmkairlangga", 
  },
]

export function getEvent(slug: string){
  return dataevent.find(
    (event) => event.slug == slug
  )
}