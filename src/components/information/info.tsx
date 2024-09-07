import Layout from "../layout/layout";
import "./info.css";

const Information: React.FC = () => {
  return (
    <Layout activeSection="info" title="INFORMATION">
      <div className="info">
        <div className="info-header">
          Weather
        </div>
        <div className="info-subheader">
          Athens is expected to offer beautiful weather, perfect for an outdoor wedding. The late spring climate typically features warm temperatures, averaging around 25°C, with plenty of sunshine and gentle breezes. The days are long, allowing for extended daylight hours to enjoy outdoor ceremonies and receptions. Rain is very rare during this time, so you can anticipate clear skies and a comfortable and pleasant atmosphere!
        </div>
      </div>
    </Layout>
  )
}

export default Information;