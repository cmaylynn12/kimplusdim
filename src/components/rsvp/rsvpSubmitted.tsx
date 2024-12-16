import { useLocation, useNavigate } from "react-router-dom";
import "./rsvp.css";
import Message from "../message/message";
import { RSVP_MESSAGES } from "../../rsvpMessages";

interface RSVPSubmittedProps {
  accepted: boolean;
  isSubmitted: boolean;
}

const RSVPSubmitted: React.FC<RSVPSubmittedProps> = ({
  accepted,
  isSubmitted,
}) => {
  const navigate = useNavigate();
  const guest = useLocation().state?.name as string;
  return (
    <div className={`rsvp-text ${isSubmitted ? "expanded" : ""}`}>
      {accepted ? (
        <Message
          message={
            RSVP_MESSAGES[guest] ? RSVP_MESSAGES[guest] : RSVP_MESSAGES.others
          }
          // message={
          //   guest === "Cheok Seng Lee"
          //     ? RSVP_MESSAGES[guest]
          //     : RSVP_MESSAGES.others
          // }
        />
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
