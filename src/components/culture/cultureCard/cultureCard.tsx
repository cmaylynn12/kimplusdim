import "../culture.css";

interface CultureCardProps {
  title: string;
  onClick: (e: string) => void;
}

const CultureCard: React.FC<CultureCardProps> = ({ title, onClick }) => {
  return (
    <div className="culture-card" onClick={() => onClick(title)}>
      <div className="culture-card-mask">
        <div className="culture-card-title">{title}</div>
      </div>
    </div>
  );
};

export default CultureCard;
