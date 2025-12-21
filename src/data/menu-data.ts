
interface MenuItem {
  title: string;
  path: string;
  has_submenu?: boolean;
  sub_menus?: {
    title: string;
    path: string;
    has_inner_submenu?: boolean;
    noBorder?: boolean;
    sub_menus?: { title: string; path: string; }[];
  }[];
  noBorder?: boolean;
}[];

const menu_data: MenuItem[] = [
  { title: "Home", has_submenu: false, path: "/" },
  { title: "About", has_submenu: false, path: "#about" },
  { title: "Features", has_submenu: false, path: "#features" },
  { title: "Services", has_submenu: false, path: "#services" },
  { title: "Portfolio", has_submenu: false, path: "#portfolio" },
  { title: "Team", has_submenu: false, path: "#team" },
];


export default menu_data;