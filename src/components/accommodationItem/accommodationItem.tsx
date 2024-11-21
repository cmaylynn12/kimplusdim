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
  return (
    <div
      className="accommodation-card"
      style={{ backgroundImage: imageUrl ? imageUrl : "" }}
    >
      <div>{area}</div>
      <div>{header}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default AccommodationItem;
