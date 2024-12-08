
// interface Navitems{
//     title:string,
//     link:string
// }


interface Icon {
  src: string;
  alt: string;
  width: number;
  height: number;

}



// export const navItems:Navitems[] =[
// {
//   title:"Home",
//   link:"/"
// },
// {
//   title:"Shop",
//   link:"/shop"
// },
// {
//   title:"About",
//   link:"/about"
// },
// {
//   title:"Contact",
//   link:"/contact"
// },


// ];

export const iconsList:Icon[]=[

  { src:"/Like.png", alt:"Like", width:50, height:50 },
  { src: "/Setting.png", alt: "setting", width: 50, height: 50},
  { src: "/Notification.png", alt: "notification", width: 50, height: 50 },
  { src: "/Image.png", alt: "Image", width: 50, height: 50 }

]