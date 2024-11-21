import { useNavigate } from "react-router-dom";
import "./accommodationItem.css";

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
  const navigate = useNavigate();

  return (
    <div
      className="accommodation-card"
      style={{ backgroundImage: imageUrl ? imageUrl : "" }}
      onClick={() => navigate(`/accommodation/${area.toLowerCase()}`)}
    >
      <div className="area">{area}</div>
      <div className="accommodation-header">{header}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default AccommodationItem;
