import menu_data from "@/data/menu-data";
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
      {menu_data.map((item, i) => (
        <li key={i} className={`${item.has_submenu ? "menu-item-has-children" : ""}`}>
          <Link
            href={item.path}
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
          {item.has_submenu &&
            <ul className="sub-menu">
              {item.sub_menus?.map((sub_item, index) => (
                <li key={index} className={`${sub_item.has_inner_submenu ? "menu-item-has-children" : ""}`}>
                  <Link
                    className="no-border"
                    href={sub_item.path}
                    style={{
                      ...baseStyle,
                      padding: "6px 12px",
                      color: menu_style ? "#ffffff" : "#24293c",
                    }}
                    onMouseEnter={hoverOn}
                    onMouseLeave={hoverOff}
                  >
                    {sub_item.title}
                  </Link>
                  {sub_item.has_inner_submenu &&
                    <ul className="sub-menu">
                      {sub_item.sub_menus?.map((inner_item, inner_index) => (
                        <li key={inner_index}>
                          <Link
                            href={inner_item.path}
                            style={{
                              ...baseStyle,
                              padding: "6px 12px",
                              color: menu_style ? "#ffffff" : "#24293c",
                            }}
                            onMouseEnter={hoverOn}
                            onMouseLeave={hoverOff}
                          >
                            {inner_item.title}
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
