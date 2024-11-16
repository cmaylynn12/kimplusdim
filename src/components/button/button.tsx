import { useNavigate } from "react-router-dom";
import "./button.css";

interface ButtonProps {
  urlPath: string;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ urlPath, title }) => {
  const navigate = useNavigate();

  return (
    <button className="main-button" onClick={() => navigate(urlPath)}>
      {title}
    </button>
  );
};

export default Button;
