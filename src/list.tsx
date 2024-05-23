import eldenps5 from "./assets/images/Elden Ring/Elden-Ring-ps-1-13.jpg";
import eldenxbox from "./assets/images/Elden Ring/Elden-Ring-xbox-1-13.jpg";
import eldenxpc from "./assets/images/Elden Ring/Elden-Ring-pc2-20.jpg";
import forzaXbox from "./assets/images/Forza Horizon 5/Forza-Horizon-5-xbox-cover2.jpg"
import forzaPC from "./assets/images/Forza Horizon 5/Forza-Horizon-5-pc-cdkeyshareir-30.jpg"
import GOWR from "./assets/images/God Of war Ragnarok/GOD-OF-WAR-RAGNAROK-ps-4.jpg"
import GTAVIX from "./assets/images/GTAVI/Gta-VI-Xbox-cdkeyshareir-1.jpg"
import GTAVIPC from "./assets/images/GTAVI/Gta-VI-Pc-cdkeyshareir-1.jpg"
import GTAVIPS5 from "./assets/images/GTAVI/Gta-VI-Ps-cdkeyshareir-1.jpg"
import TLOU2 from "./assets/images/TLOU2/The-Last-of-Us-Part-II-Remastered-ps-cdkeyshareir-7.jpg"
import Hellpc from "./assets/images/Hellblade2/Hellblade-Senuas-Sacrifice-pc-cdkeyshareir-1.jpg"
import HellX from "./assets/images/Hellblade2/Senua-s-Saga-Hellblade-II-xbox-cdkeyshareir-1.jpg"
import TombPc from "./assets/images/RiseoftheTombRaider/Rise-of-the-Tomb-Raider-pc-cdkeyshareir-1.jpg"
import TombX from "./assets/images/RiseoftheTombRaider/rise-of-the-tomb-raidr-xbox-13-252x345.jpg"
import FC24PC from "./assets/images/eafc24/EA-Sports-FC-24-cdkeyshareir-15.jpg"
import FC24X from "./assets/images/eafc24/EA-SPORTS-FC-24-xbox-cdkeyshareir-1.jpg"
import FC24PS from "./assets/images/eafc24/EA-SPORTS-FC-24-ps-cdkeyshareir-1.jpg"
import ACSHPC from "./assets/images/ACShadows/Assassins-Creed-Shadows-Pc-cdkeyshareir-1.jpg"
import ACSHX from "./assets/images/ACShadows/Assassins-Creed-Shadows-Xbox-cdkeyshareir-1.jpg"
import ACSHPS from "./assets/images/ACShadows/Assassins-Creed-Shadows-PS5-cdkeyshareir-1.jpg"
import ACMPC from "./assets/images/ACMirage/Assassins-Creed-Mirage-pc-11.jpg"
import ACMPS from "./assets/images/ACMirage/assassins-creed-mirage-ps-6.jpg"
import ACMX from "./assets/images/ACMirage/assassins-creed-mirage-xbox-5.jpg"
import AWPC from "./assets/images/AlanWake 2/Alan-Wake-2pc-org-1.jpg"
import AWPS from "./assets/images/AlanWake 2/Alan-Wake-2-ps-1.jpg"
import AWX from "./assets/images/AlanWake 2/Alan-Wake-2-xbox-1.jpg"
import RE4PC from "./assets/images/RE4/PC-Orginal-final.jpg"
import RE4PS from "./assets/images/RE4/PS6.jpg"
import RE4X from "./assets/images/RE4/Xbox7-.jpg"
import SHTombPc from "./assets/images/ShadowoftheTombRaiderDefinitive Edition/Shadow-of-the-Tomb-Raider-Definitive-Edition-pc-cdkeyshareir-1.jpg"
import SHTombX from "./assets/images/ShadowoftheTombRaiderDefinitive Edition/shadow-of-the-tomb-raider-xbox-14-252x345.jpg"
// import { useTranslation } from "react-i18next";
// import { FaXbox } from "react-icons/fa";
// import { SiPlaystation5 } from "react-icons/si";
// import { GrPersonalComputer } from "react-icons/gr";

export const list = [
  
  {
    id: 1,
    name: "Elden Ring",
    company: "FromSoftware",
    defaultImage: eldenps5,
    Year: 2022,
    price : 60,
    images: {
      PC: eldenxpc,
      PS5: eldenps5,
      ps4: eldenps5,
      XBOX: eldenxbox,
    },
    genre: "Role-playing game",
    platform: ["PC", "PS4" , "PS5", "XBOX"],

    story:
      "loremIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  },
  {
    id: 2,
    name: "God Of War Ragnarok",
    company: "Santa Monica",
    defaultImage: GOWR,
    Year: 2022,
    price : 60,
    genre: "Hack and Slash",
    images: {
      PS4: GOWR,
      PS5: GOWR,
    },
    platform: ["PS4", "PS5"],

    story:
      "loremIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  },
  {
    id: 3,
    name: "Forza Horizon 5",
    company: "Microsoft",
    defaultImage: forzaXbox,
    Year: 2021,
    price : 60,
    images: {
      PC: forzaPC,
      XBOX: forzaXbox,
    },
    genre: "Drive",
    platform: ["PC", "XBOX"],

    story:
      "loremIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  },
  {
    id: 4,
    name: "GTA VI",
    company: "Rock Star",
    defaultImage: GTAVIPS5,
    Year: 2025,
    price : 60,
    images: {
      PC: GTAVIPC,
      PS5: GTAVIPS5,
      XBOX: GTAVIX,
    },
    genre: "Open World",
    platform: ["PC", "PS5", "XBOX"],

    story:
      "loremIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  },
  {
    id: 5,
    name: "The Last Of Us Part 2",
    company: "Naughty Dog",
    defaultImage: TLOU2,
    Year: 2020,
    price : 60,
    images: {
      PS5: TLOU2,
    },
    genre: "Advanture",
    platform: ["PS5"],
    story:
      "در یک تمدن ویران شده، جایی که بازماندگان آلوده و سخت‌گیر بیداد می‌کنند، جوئل، قهرمان خسته، استخدام می‌شود تا الی 14 ساله را از یک منطقه قرنطینه نظامی به بیرون قاچاق کند.",
  },
  {
    id: 6,
    name: "Senua’s Saga Hellblade II",
    company: "Ninja Theory",
    defaultImage: Hellpc,
    Year: 2024,
    price : 60,
    images: {
      PC: Hellpc,
      XBOX: HellX,
    },
    genre: "Role-playing game",
    platform: ["PC", "XBOX"],
    story:
      "دنباله برنده جایزه Hellblade: Senua’s Sacrifice، Senua در سفری بی رحمانه برای بقا از طریق اسطوره و عذاب وایکینگ ایسلند بازمی گردد. Senua با هدف نجات کسانی که قربانی وحشت…      ",
  },{
    id: 7,
    name: "Rise of the Tomb Raider",
    company: "Eidos-Montréal",
    defaultImage: TombPc,
    Year: 2015,
    price : 60,
    images: {
      PC: TombPc,
      XBOX: TombX,
    },
    genre: "Advanture",
    platform: ["PC", "XBOX"],
    story:
      "دنباله برنده لارا یک راز باستانی را کشف می کند که او را در تلاقی یک سازمان بی رحم به نام ترینیتی قرار می دهد. همانطور که او برای یافتن راز قبل از ترینیتی مسابقه می دهد، مسیر به افسانه ای در مورد شهر گمشده کیتژ منتهی می شود. لارا می داند که باید قبل از ترینیتی به شهر گمشده و اسرار پنهان آن برسد. ",
  },{
    id: 8,
    name: "Shadow of the Tomb Raider",
    company: "Eidos-Montréal",
    defaultImage: SHTombX,
    Year: 2018,
    price : 60,
    images: {
      PC: SHTombPc,
      XBOX: SHTombX,
    },
    genre: "Advanture",
    platform: ["PC", "XBOX"],
    story:
      "دنباله برنده لارا یک راز باستانی را کشف می کند که او را در تلاقی یک سازمان بی رحم به نام ترینیتی قرار می دهد. همانطور که او برای یافتن راز قبل از ترینیتی مسابقه می دهد، مسیر به افسانه ای در مورد شهر گمشده کیتژ منتهی می شود. لارا می داند که باید قبل از ترینیتی به شهر گمشده و اسرار پنهان آن برسد. ",
  },{
    id: 9,
    name: "EA FC 24",
    company: "EA",
    defaultImage: FC24PS,
    Year: 2023,
    price : 60,
    images: {
      PC: FC24PC,
      XBOX: FC24X,
      PS5: FC24PS
    },
    genre: "Sport",
    platform: ["PC", "XBOX" , "PS5"],
    story:
      "دنباله برنده لارا یک راز باستانی را کشف می کند که او را در تلاقی یک سازمان بی رحم به نام ترینیتی قرار می دهد. همانطور که او برای یافتن راز قبل از ترینیتی مسابقه می دهد، مسیر به افسانه ای در مورد شهر گمشده کیتژ منتهی می شود. لارا می داند که باید قبل از ترینیتی به شهر گمشده و اسرار پنهان آن برسد. ",
  },{
    id: 10,
    name: "Assassin's Creed Shadows",
    company: "Ubisoft",
    defaultImage: ACSHPS,
    Year: 2024,
    price : 60,
    images: {
      PC: ACSHPC,
      XBOX: ACSHX,
      PS5: ACSHPS
    },
    genre: "Advanture",
    platform: ["PC", "XBOX" , "PS5"],
    story:
      "دنباله برنده لارا یک راز باستانی را کشف می کند که او را در تلاقی یک سازمان بی رحم به نام ترینیتی قرار می دهد. همانطور که او برای یافتن راز قبل از ترینیتی مسابقه می دهد، مسیر به افسانه ای در مورد شهر گمشده کیتژ منتهی می شود. لارا می داند که باید قبل از ترینیتی به شهر گمشده و اسرار پنهان آن برسد. ",
  },{
    id: 11,
    name: "Assassin's Creed Mirage",
    company: "Ubisoft",
    defaultImage: ACMPS,
    Year: 2023,
    price : 60,
    images: {
      PC: ACMPC,
      XBOX: ACMX,
      PS5: ACMPS
    },
    genre: "Advanture",
    platform: ["PC", "XBOX" , "PS5"],
    story:
      "در Assassin’s Creed Mirage، شما Basim هستید، یک دزد خیابانی حیله گر با دیدهای کابوس وار.",
  },{
    id: 12,
    name: "Alan Wake 2",
    company: "Ubisoft",
    defaultImage: AWPC,
    Year: 2023,
    price : 60,
    images: {
      PC: AWPC,
      XBOX: AWX,
      PS5: AWPS
    },
    genre: "Survival horror",
    platform: ["PC", "XBOX" , "PS5"],
    story:
      "Alan Wake 2 یک بازی ترسناک بقا با فضایی شدید و داستانی پیچیده، لایه‌ای و روان‌شناختی است.",
  },{
    id: 13,
    name: "Resident Evil 4",
    company: "Capcom",
    defaultImage: RE4PC,
    Year: 2023,
    price : 60,
    images: {
      PC: RE4PC,
      XBOX: RE4X,
      PS5: RE4PS
    },
    genre: "Survival horror",
    platform: ["PC", "XBOX" , "PS5"],
    story:
      "مامور ویژه لئون اس کندی به ماموریتی فرستاده می شود تا دختر رئیس جمهور ایالات متحده را که ربوده شده است نجات دهد.",
  },
];
