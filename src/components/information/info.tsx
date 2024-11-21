import Layout from "../layout/layout";
import "./info.css";

const Information: React.FC = () => {
  return (
    <Layout activeSection="info" title="Information">
      <div className="info">
        <div className="info-header">
          Welcome to Our Big Fat Greek Wedding! 🇬🇷
        </div>
        <div className="info-subheader">
          We’re so excited to celebrate our love in the heart of Greece, and
          even more excited to have you join us! Here’s everything you need to
          know to plan your trip to Athens and make our wedding unforgettable.{" "}
        </div>
        <div>Getting to Athens</div>
        <div>
          Athens is easily accessible with direct flights from many
          international cities. The main airport is Athens International Airport
          (ATH)
        </div>
      </div>
    </Layout>
  );
};

export default Information;
