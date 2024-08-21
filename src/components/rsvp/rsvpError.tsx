import { useLocation } from "react-router-dom";

const RSVPError: React.FC = () => {

  const { error } = useLocation().state;

  return (
    <>{error}</>
  )
}

export default RSVPError; 