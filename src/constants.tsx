
import { StaticImageData } from "next/image";
import Like from "../public/nav_icons/Like.png";
import Setting from "../public/nav_icons/Setting.png";
import Notification from "../public/nav_icons/Notification.png";
import profileimage1 from "../public/nav_icons/profileimage1.png";


interface Icon {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;

}

export const iconsList:Icon[]=[

  { src: Like, alt:"Like", width:50, height:50 },
  { src: Setting, alt: "setting", width: 50, height: 50},
  { src: Notification, alt: "notification", width: 50, height: 50 },
  { src: profileimage1, alt: "Image", width: 50, height: 50 }

]