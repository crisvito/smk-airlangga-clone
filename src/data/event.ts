import { detaillomba17 } from "./events";
import { detailperjusa } from "./events";

export type Event = {
  id: string;
  name: string;
  slug: string;
  excerpt: string;
  content: any;
  heroImgUrl: string;
  detail: object[];
}

export const dataevent: Event[] =[
  {
    id: "1", 
    name: "Lomba 17 an",
    slug: "lomba17-an",
    excerpt: "SMK Airlangga Balikpapan merayakan 17 Agustus dengan lomba lomba yang bervariasi dan juga menyenangkan...", 
    content: "SMK Airlangga Balikpapan merayakan 17 Agustus dengan lomba lomba yang bervariasi dan juga menyenangkan, dengan adanya lomba tersebut SMK Kesehatan Airlangga, dan SMP Plus Airlangga juga bergabung di lomba tersebut. lomba tersebut berlangsung dari pagi sampai sore di hari senin selasa kamis dan jumat. lomba tersebut berguna untuk melatih kerja sama antara teman, melatih kreatifitas anak, mandiri, dan percaya diri. dan pembacaan pemenang lomba di tanggal 22 Agustus 2022", 
    heroImgUrl:"public/assets/lomba17an",
    detail: detaillomba17
  },
  {
    id: "2", 
    name: "Perjusa", 
    slug: "perjusa", 
    excerpt: "Perjusa adalah perkemahan jumat-sabtu . tujuan dari perjusa adalah untuk meningkatkan kemandirian...",
    content: "Perjusa adalah perkemahan jumat-sabtu . tujuan dari perjusa adalah untuk meningkatkan kemandirian para peserta kemah di alam luar (outdoor) . Banyak sekali perubahan yang dialami peserta kemah , yang dirasakan nya adalah bisa mengenal alam lebih jauh,bisa mandiri dalam kehidupan dan bisa menjadi percaya diri untuk berbicara kepada temannya walaupun belum mengenal satu sama lain antar peserta dalam jangka waktu sehari .",
    heroImgUrl:"public/assets/perjusa",
    detail: detailperjusa 
  },
  {
    id: "3", 
    name: "Perjusa", 
    slug: "perjusa", 
    excerpt: "Perjusa adalah perkemahan jumat-sabtu . tujuan dari perjusa adalah untuk meningkatkan kemandirian...",
    content: "Perjusa adalah perkemahan jumat-sabtu . tujuan dari perjusa adalah untuk meningkatkan kemandirian para peserta kemah di alam luar (outdoor) . Banyak sekali perubahan yang dialami peserta kemah , yang dirasakan nya adalah bisa mengenal alam lebih jauh,bisa mandiri dalam kehidupan dan bisa menjadi percaya diri untuk berbicara kepada temannya walaupun belum mengenal satu sama lain antar peserta dalam jangka waktu sehari .",
    heroImgUrl:"public/assets/perjusa",
    detail: detailperjusa 
  },
  {
    id: "4", 
    name: "Perjusa", 
    slug: "perjusa", 
    excerpt: "Perjusa adalah perkemahan jumat-sabtu . tujuan dari perjusa adalah untuk meningkatkan kemandirian...",
    content: "Perjusa adalah perkemahan jumat-sabtu . tujuan dari perjusa adalah untuk meningkatkan kemandirian para peserta kemah di alam luar (outdoor) . Banyak sekali perubahan yang dialami peserta kemah , yang dirasakan nya adalah bisa mengenal alam lebih jauh,bisa mandiri dalam kehidupan dan bisa menjadi percaya diri untuk berbicara kepada temannya walaupun belum mengenal satu sama lain antar peserta dalam jangka waktu sehari .",
    heroImgUrl:"public/assets/perjusa",
    detail: detailperjusa 
  },
]