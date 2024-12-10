import { Canvas } from "@react-three/fiber";
import Layout from "../layout/layout";
import "./activities.css";
import SpinnableCard from "../invite/invite";
import { OrbitControls } from "@react-three/drei";

const Activities: React.FC = () => {
  return (
    <Layout activeSection="activities">
      <div className="activities">
        <div>
          <div className="category">Eat & Drink</div>
          <div className="category-container">
            <div className="type-container">
              <div className="type">1/ Souvlakia</div>
              <div className="places">
                O Thanasis • O Kostas • Lefteris O Politis • Achilleas • Tomas •
                Panerythraikos • Kafteros • To Teleion
              </div>
            </div>
            <div className="type-container">
              <div className="type">3/ Modern Fusion Restaurants</div>
              <div className="places">
                Ekiben Kitchen • Tanpopo • Birdman • Zuzuto Ramen • Cookoovaya •
                NYX • Juicy Grill • Selim Bey • Eleas Gi{" "}
              </div>
            </div>
            <div className="type-container">
              <div className="type">2/ Rooftop Bars</div>
              <div className="places">
                Attic Urban Rooftop • City ZEN Athens • 360 Cocktail Bar • Thea
                Terrace Bar • Rooftop at St. George Lycabettus • A for Athens •
                Kalispera Athenian Tapas
              </div>
            </div>
            <div className="type-container">
              <div className="type">4/ Taverns</div>
              <div className="places">
                Diporto • Spyridis • To Kati Allo • Klimataria • Avli • Psaras •
                Cafe Avissinia • Atlantikos • Ama Lachei • Psarokokkalo • Ouzeri
                tou Laki{" "}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="category">Explore & Play</div>
          <div className="category-container">
            <div className="type-container">
              <div className="type">1/ Sightseeing</div>
              <div className="places">
                Acropolis and Parthenon • Acropolis Museum • Ancient Agora •
                Plaka • Panathenaic Stadium • Monastiraki • Syntagma Square •
                National Garden of Athens • Temple of Poseidon •
              </div>
            </div>
            <div className="type-container">
              <div className="type">3/ Shopping</div>
              <div className="places">
                Ermou Street • Monastiraki Flea Market • Kolonaki • Golden Hall
                • Discount Village • The Mall Athens
              </div>
            </div>
            <div className="type-container">
              <div className="type">2/ Nearby Beaches</div>
              <div className="places">
                Akti Vouliagmenis Beach • Cape Sounion • Vouliagmeni Lake •
                Glyfada Beach • Lagonisi Beach • Voula Beach • Varkiza Beach
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Activities;
