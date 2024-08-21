import AccommodationItem from "../accommodationItem/accommodationItem";
import Layout from "../layout/layout";

import './accommodation.css';

const Accommodation: React.FC = () => {
  return (
    <Layout activeSection="accommodation" title="Accommodation">
      <div className="area-container">
        ATHENS (20kms)
        <div>Where to stay in Athens?</div>

        <div className="accommodation-container">
          <AccommodationItem accomodationName="HEHE"/>
          <AccommodationItem accomodationName="HOHO"/>
          <AccommodationItem accomodationName="HUHU"/>
        </div>
      </div>
      <div className="area-container">
        AIRPORT (19kms)
      </div>
      <div className="area-container">
        AREAS NEAR THE VENUE (within 10kms)
      </div>
    </Layout>
  )
}

export default Accommodation;