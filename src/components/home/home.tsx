import { useNavigate } from "react-router-dom";
import Layout from "../layout/layout";
import './home.css';

const Home: React.FC = () => {

  const navigate = useNavigate();

  return (
    <Layout activeSection="home">
      <div className="container">
        <img src="./icon.png" className="icon"/>
        <div className="venue-info">
          <span className="venue">at Island Art & Taste Gallery</span>
          <span className="address">Leoforos Poseidonos 66, Vari 166 72</span>
        </div>
        <button className="input-button" onClick={() => navigate('/rsvp')}>RSVP</button>
      </div>
    </Layout>
  )
}

export default Home;