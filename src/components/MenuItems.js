import {
  faCaretDown,
  faRightToBracket,
  //faHouseUser,
  //faBriefcase,
  // faAddressCard,
  // faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export const MenuItems = [
  {
    title: "Home",
    url: "/",
    //icon: faHouseUser,
  },
  {
    title: "Service",
    url: "/service",
    //icon: faBriefcase,
  },
  {
    title: "Odoo",
    url: "https://erp1.kendroo.io/web/login?db=BusinessERP",
    target: "_blank",
  },
  // {
  //   title: "About",
  //   url: "/about",
  //   cName: "nav_links",
  //   icon: faCircleInfo,
  // },
  {
    title: "About Us",
    cName: "nav_links",
    icon: faCaretDown,
    subMenu: [
      {
        title: "Testimonial",
        url: "/about",
        cName: "sub_nav_links",
      },
      {
        title: "Our Company",
        url: "/about/our-company",
        cName: "sub_nav_links",
      },
      { title: "Our Team", url: "/about/ourTeam", cName: "sub_nav_links" },

      { title: "Portfolio", url: "/about/portfolio", cName: "sub_nav_links" },
      { title: "Career", url: "/about/career", cName: "sub_nav_links" },
    ],
  },

  {
    title: "Contact",
    url: "/contact",
    //icon: faAddressCard,
  },
  // {
  //   title: "Sign Up",
  //   url: "/signup",
  //   cName: "nav_links_mobile",
  //   icon: faRightToBracket,
  // },
];
