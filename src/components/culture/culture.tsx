import { useState } from "react";
import Layout from "../layout/layout";
import "./culture.css";
import CultureCard from "./cultureCard/cultureCard";

const Culture: React.FC = () => {
  const [currentCulture, setCurrentCulture] = useState<null | string>(null);

  return (
    <Layout title="Culture" activeSection="culture">
      <div className="culture-container">
        <div className="subheader">
          Our wedding is more than a celebration of our love—it’s a vibrant
          fusion of the cultures that have shaped us. With roots in Malaysia and
          Greece, we are thrilled to share the beauty of our traditions,
          blending Greek Orthodox customs with Malaysian-Chinese heritage.
        </div>
        <div className="subheader">
          Whether you’re learning a new dance step, savoring a traditional dish,
          or witnessing a unique custom for the first time, we hope this day
          will be as enriching and unforgettable for you as it is for us. Thank
          you for being part of our beautiful celebration!
        </div>
        <div className="culture-card-container">
          <CultureCard
            title="tea ceremony"
            onClick={(e) => setCurrentCulture(e)}
          />
          <CultureCard
            title="koumparoi"
            onClick={(e) => setCurrentCulture(e)}
          />

          <CultureCard title="stefana" onClick={(e) => setCurrentCulture(e)} />
          <CultureCard title="yam seng" onClick={(e) => setCurrentCulture(e)} />
          <CultureCard title="opaaaaa" onClick={(e) => setCurrentCulture(e)} />
        </div>
      </div>
    </Layout>
  );
};

export default Culture;
