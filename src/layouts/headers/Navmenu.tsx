import type React from "react";
import navigationLinks from "@/data/navigation-links";
import Link from "next/link";

interface NavmenuProps {
  menu_style?: boolean;
}


export default function Navmenu({ menu_style = false }: NavmenuProps) {
  const baseStyle = {
    display: "inline-block",
    border: "2px solid transparent",
    borderRadius: "9999px",
    padding: "8px 14px",
    transition: "all 0.2s ease",
    background: "transparent",
    textDecoration: "none",
    fontWeight: 700,
  } as const;

  const hoverOn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = "rgba(197, 166, 99, 1)";
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.boxShadow = "none";
  };

  const hoverOff = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = "transparent";
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <ul>
      {navigationLinks.map((item, i) => (
        <li key={i} className={`${item.hasSubmenu ? "menu-item-has-children" : ""}`}>
          <Link
            href={item.href}
            className={`${menu_style ? "light-color" : ""}`}
            style={{
              ...baseStyle,
              color: menu_style ? "#ffffff" : "#24293c",
            }}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            {item.title}
          </Link>
          {item.hasSubmenu && item.subLinks &&
            <ul className="sub-menu">
              {item.subLinks.map((subItem, index) => (
                <li key={index} className={`${subItem.hasSubmenu ? "menu-item-has-children" : ""}`}>
                  <Link
                    className="no-border"
                    href={subItem.href}
                    style={{
                      ...baseStyle,
                      padding: "6px 12px",
                      color: menu_style ? "#ffffff" : "#24293c",
                    }}
                    onMouseEnter={hoverOn}
                    onMouseLeave={hoverOff}
                  >
                    {subItem.title}
                  </Link>
                  {subItem.hasSubmenu && subItem.subLinks &&
                    <ul className="sub-menu">
                      {subItem.subLinks.map((innerItem, innerIndex) => (
                        <li key={innerIndex}>
                          <Link
                            href={innerItem.href}
                            style={{
                              ...baseStyle,
                              padding: "6px 12px",
                              color: menu_style ? "#ffffff" : "#24293c",
                            }}
                            onMouseEnter={hoverOn}
                            onMouseLeave={hoverOff}
                          >
                            {innerItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  }
                </li>
              ))}
            </ul>
          }
        </li>
      ))}
    </ul>
  )
}
