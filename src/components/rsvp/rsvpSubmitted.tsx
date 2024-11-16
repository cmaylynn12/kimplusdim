import { useNavigate } from "react-router-dom";
import "./rsvp.css";
import Message from "../message/message";

interface RSVPSubmittedProps {
  accepted: boolean;
  isSubmitted: boolean;
}

const RSVPSubmitted: React.FC<RSVPSubmittedProps> = ({
  accepted,
  isSubmitted,
}) => {
  const navigate = useNavigate();

  return (
    <div className={`rsvp-text ${isSubmitted ? "expanded" : ""}`}>
      <div>
        <img src="/cupid.png" height={250} width={250} className="cupido" />
      </div>

      {accepted ? (
        <Message message="Excellent! Your decision to RSVP ‘yes’ is both commendable and... dare I say, expected. We shall await you with great anticipation." />
      ) : (
        <Message message="Now that’s a real shame. A real shame. We’ll be missin’ ya, but I reckon you got your reasons. Don’t worry—there’ll be a drink raised in your honor." />
      )}
      <button className="input-button" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
};

export default RSVPSubmitted;
