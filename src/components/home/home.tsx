import { useNavigate } from "react-router-dom";
import Layout from "../layout/layout";
import './home.css';

const Home: React.FC = () => {

  const navigate = useNavigate();
  const today = new Date().getTime();
  const weddingDay = new Date("May 29, 2025 00:00:00").getTime();
  const daysUntil = Math.floor((weddingDay - today)/(1000 * 60 * 60 * 24));

  return (
    <Layout activeSection="home">
      <div className="container">
        {/* <div className="days">{daysUntil} days to go!</div> */}
        <img src="./icon.png" className="icon"/>
        <div className="venue-info">
          <span className="venue">Island Art & Taste Gallery</span>
          <span className="address">Leoforos Poseidonos 66, Vari 166 72</span>
        </div>
        <button className="input-button" onClick={() => navigate('/rsvp')}>RSVP</button>
      </div>
    </Layout>
  )
}

export default Home;