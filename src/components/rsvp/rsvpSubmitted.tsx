import { useNavigate } from "react-router-dom";
import "./rsvp.css";

const RSVPSubmitted: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className="submitted-container">
      <p className="rsvp-text">RSVP submitted, click here to go back to the home page!</p>
      <button className="input-button" onClick={() => navigate('/')}>HOME</button>
    </div>
  )
}

export default RSVPSubmitted;