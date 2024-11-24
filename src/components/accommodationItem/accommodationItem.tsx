import "./accommodationItem.css";
import { useState } from "react";

interface AccommodationItemProps {
  area: string;
  imageUrl?: string;
  header: string;
  description: string;
}

const AccommodationItem: React.FC<AccommodationItemProps> = ({
  area,
  imageUrl,
  description,
  header,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`accommodation-card`}
      style={{ backgroundImage: imageUrl ? imageUrl : "" }}
    >
      <div className="area">{area}</div>
      <div className="accommodation-header">{header}</div>
      <div className="description">{description}</div>
      <div className={`accommodation ${isExpanded ? "expanded" : ""}`}>
        Here's an intro to {area}
        Here's an intro to Here's an intro to Here's an intro to Here's an intro
        to Here's an intro to Here's an intro to Here's an intro to Here's an
        intro to Here's an intro to Here's an intro to Here's an intro to Here's
        an intro to Here's an intro to
      </div>
    </div>
  );
};

export default AccommodationItem;
