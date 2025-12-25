export interface NavigationLink {
  title: string;
  href: string;
  hasSubmenu?: boolean;
  subLinks?: NavigationLink[];
}

export const navigationLinks: NavigationLink[] = [
  { title: "Home", href: "/" },
  { title: "Despre", href: "#about" },
  { title: "Servicii", href: "#features" },
  { title: "Blog", href: "#portfolio" },
  { title: "Întrebări frecvente", href: "#faq" },
  { title: "Contact", href: "#contact" },
];

export default navigationLinks;
