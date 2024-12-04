import { Link } from "react-router-dom";
import clsx from "clsx";
import "./menuItem.css";

interface MenuItemProps {
  activeSection: string;
  section: string;
  title: string;
  urlPath: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  activeSection,
  section,
  title,
  urlPath,
}) => {
  return (
    <Link
      to={urlPath}
      className={clsx("button", {
        active: activeSection === section,
      })}
    >
      {title}
    </Link>
  );
};

export default MenuItem;
