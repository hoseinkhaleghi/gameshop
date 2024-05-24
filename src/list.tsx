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
      "Elden Ring is a 2022 action role-playing game developed by FromSoftware. It was directed by Hidetaka Miyazaki",
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
      "God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. ",
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
      "Drive purpose-built rally monsters and conquer the rugged Sierra Nueva. Attack Horizon's most thrilling routes in timed rally and multi-car races.",
  },
  {
    id: 4,
    name: "GTA VI",
    company: "Rock Star",
    defaultImage: GTAVIPS5,
    Year: 2025,
    price : 80,
    images: {
      PC: GTAVIPC,
      PS5: GTAVIPS5,
      XBOX: GTAVIX,
    },
    genre: "Open World",
    platform: ["PC", "PS5", "XBOX"],

    story:
      "Grand Theft Auto VI heads to the state of Leonida, home to the neon-soaked streets of Vice City and beyond in the biggest",
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
      "The Last of Us Part II is a 2020 action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment",
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
      "Senua's Saga: Hellblade II is a 2024 action-adventure game developed by Ninja Theory and published by Xbox Game Studios. ",
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
      "Rise of the Tomb Raider is a 2015 action-adventure game developed by Crystal Dynamics and published by Microsoft Studios and Square Enix.",
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
      "Shadow of the Tomb Raider is a 2018 action-adventure game developed by Eidos-Montréal and published by Square Enix's European subsidiary.",
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
    "EA Sports FC 24 is an association football-themed simulation video game developed by EA Vancouver and EA Romania and published by EA Sports.",
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
      "Assassin's Creed Shadows is an upcoming action role-playing video game developed by Ubisoft Quebec and published by Ubisoft, set to release in November 2024.",
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
      "Assassin's Creed Mirage is a 2023 action-adventure game developed by Ubisoft Bordeaux and published by Ubisoft. The game is the thirteenth major installment in the Assassin's Creed series and the successor to 2020's Assassin's Creed Valhalla. ",
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
      "Alan Wake 2 is a 2023 survival horror video game developed by Remedy Entertainment and published by Epic Games Publishing.",
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
      "Resident Evil 4 is a survival horror game by Capcom, originally released for the GameCube in 2005. Players control the special agent Leon S. Kennedy on a mission to rescue the US president's daughter, Ashley Graham, who has been kidnapped by a religious cult in rural Spain.",
  },
];
