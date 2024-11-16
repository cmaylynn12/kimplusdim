import { useNavigate } from "react-router-dom";
import "./rsvp.css";
import Message from "../message/message";

interface RSVPSubmittedProps {
  accepted: boolean;
}

const RSVPSubmitted: React.FC<RSVPSubmittedProps> = ({ accepted }) => {
  const navigate = useNavigate();

  return (
    <div className="rsvp-text">
      {accepted ? (
        <Message message="AMAZING, we can't wait to celebrate with you!" />
      ) : (
        <Message message="Sad to hear you won't be able to join us. But if you do change your mind before the rsvp date, we'll have a seat waiting!" />
      )}
      <p style={{ fontSize: "16px" }}>
        Click here to go back to the home page!
      </p>
      <button className="input-button" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
};

export default RSVPSubmitted;
