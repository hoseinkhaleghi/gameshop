import eldenps5 from "./assets/images/eldenps5.jpg";
import eldenps1 from "./assets/images/eldenps5.jpg";
import eldenps2 from "./assets/images/eldenps5.jpg";
import eldenps3 from "./assets/images/eldenps5.jpg";
import eldenps4 from "./assets/images/eldenps5.jpg";
import eldenxbox from "./assets/images/eldenxbox.jpg";
import eldenxpc from "./assets/images/eldenpc.jpg";
// import PC from "./assets/images/pc.jpg";
// import XBOX from "./assets/images/XBox.jpg";
// import PS from "./assets/images/ps.jpg";
import { FaXbox } from "react-icons/fa";
import { SiPlaystation5 } from "react-icons/si";
import { GrPersonalComputer } from "react-icons/gr";
export const list = [
  {
    id: 1,
    name: "Elden Ring",
    email: "Eliseo@gardner.biz",
    company: "FromSoftware",
    imgps5: eldenps5,
    imgxbox: eldenxbox,
    Year: 2022,
    imgpc: eldenxpc,
    genre: "Role-playing game",
    platform: {
      pc: { icon: <GrPersonalComputer />, title: "pc" },
      xbox: { icon: <FaXbox />, title: "xbox" },
      ps5: { icon: <SiPlaystation5 />, title: "ps5" },
    },
    story:
      "loremIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  },
  {
    id: 2,
    name: "God Of War Ragnarok",
    email: "Jayne_Kuhic@sydney.com",
    company: "Santa Monica",
    imgps5: eldenps1,
    imgxbox: eldenxbox,
    Year: 2022,
    imgpc: eldenxpc,
    genre: "Hack and Slash",
    platform: {
      pc: { icon: <GrPersonalComputer />, title: "pc" },
      xbox: { icon: <FaXbox />, title: "xbox" },
      ps5: { icon: <SiPlaystation5 />, title: "ps5" },
    },
    story:
      "loremIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  },
  {
    id: 3,
    name: "Forza Horizon 5",
    email: "Nikita@garfield.biz",
    company: "Microsoft",
    imgps5: eldenps4,
    imgxbox: eldenxbox,
    Year: 2021,
    imgpc: eldenxpc,
    genre: "Drive",
    platform: {
      pc: { icon: <GrPersonalComputer />, title: "pc" },
      xbox: { icon: <FaXbox />, title: "xbox" },
      ps5: { icon: <SiPlaystation5 />, title: "ps5" },
    },
    story:
      "loremIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  },
  {
    id: 4,
    name: "GTA V",
    email: "Lew@alysha.tv",
    company: "Rock Star",
    imgps5: eldenps3,
    imgxbox: eldenxbox,
    Year: 2013,
    imgpc: eldenxpc,
    genre: "Open World",
    platform: {
      pc: { icon: <GrPersonalComputer />, title: "pc" },
      xbox: { icon: <FaXbox />, title: "xbox" },
      ps5: { icon: <SiPlaystation5 />, title: "ps5" },
    },
    story:
      "loremIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  },
  {
    id: 5,
    name: "The Last Of Us Part 2",
    email: "Hayden@althea.biz",
    company: "Naughty Dog",
    Year: 2020,
    imgps5: eldenps2,
    imgxbox: eldenxbox,
    imgpc: eldenxpc,
    genre: "Advanture",
    platform: {
      pc: { icon: <GrPersonalComputer />, title: "pc" },
      xbox: { icon: <FaXbox />, title: "xbox" },
      ps5: { icon: <SiPlaystation5 />, title: "ps5" },
    },
    story:
      "loremIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  },
  {
    id: 6,
    name: "The Witcher 3",
    email: "Hayden@althea.biz",
    company: "CD Projekt",
    Year: 2015,
    imgps5: eldenps2,
    imgxbox: eldenxbox,
    imgpc: eldenxpc,
    genre: "Role-playing game",
    platform: {
      pc: { icon: <GrPersonalComputer />, title: "pc" },
      xbox: { icon: <FaXbox />, title: "xbox" },
      ps5: { icon: <SiPlaystation5 />, title: "ps5" },
    },
    story:
      "loremIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  },
];
