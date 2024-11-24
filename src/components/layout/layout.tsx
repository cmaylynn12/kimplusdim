import { useContext, useState } from "react";
import MenuItem from "../menuItem/menuItem";
import "./layout.css";
import AppContext from "../../contexts/AppContext";
import Dropdown from "../dropdown/dropdown";

interface LayoutProps {
  children?: React.ReactNode;
  activeSection:
    | "home"
    | "accommodation"
    | "koumparoi"
    | "wedding"
    | "rsvp"
    | "registry"
    | "activities"
    | "faqs"
    | "info"
    | "culture";
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  activeSection,
  title,
}: LayoutProps) => {
  const { mute, unmute, isMuted, setIsMuted, isMobile } =
    useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSoundButtonToggle = () => {
    if (isMuted) {
      unmute();
    } else {
      mute();
    }
    setIsMuted(!isMuted);
  };

  return (
    <>
      <div className="body">
        <div className="header">
          {isMobile && (
            <Dropdown
              toggle={() => setIsMenuOpen(!isMenuOpen)}
              isOpen={isMenuOpen}
            />
          )}
          <div className={`menu ${isMenuOpen || !isMobile ? "show" : "hide"}`}>
            <MenuItem
              activeSection={activeSection}
              section="home"
              title="Home"
              urlPath="/"
            />
            <MenuItem
              activeSection={activeSection}
              section="rsvp"
              title="RSVP"
              urlPath="/rsvp"
            />
            {/* <MenuItem
              activeSection={activeSection}
              section="info"
              title="Information"
              urlPath="/information"
            /> */}
            {/* <MenuItem
              activeSection={activeSection}
              section="koumparoi"
              title="Koumparoi"
              urlPath="/koumparoi"
            /> */}
            <MenuItem
              activeSection={activeSection}
              section="accommodation"
              title="Accommodation"
              urlPath="/accommodation"
            />
            {/* <MenuItem
              activeSection={activeSection}
              section="culture"
              title="Culture"
              urlPath="/culture"
            /> */}
            {/*<MenuItem activeSection={activeSection} section= 'wedding' title='Wedding' urlPath='/wedding' />
            <MenuItem activeSection={activeSection} section= 'activities' title='Things to Do' urlPath='/activities' />
            <MenuItem activeSection={activeSection} section= 'registry' title='Registry' urlPath='/registry' />
            <MenuItem activeSection={activeSection} section= 'faqs' title='FAQs' urlPath='/faqs' /> */}
          </div>
        </div>
        <img
          className="volume"
          src={isMuted ? "/mute.svg" : "/unmute.svg"}
          width={30}
          height={30}
          onClick={handleSoundButtonToggle}
        />
        <div className="main">
          {title && <p className="title">{title}</p>}
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
