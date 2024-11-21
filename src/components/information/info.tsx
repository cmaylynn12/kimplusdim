import Layout from "../layout/layout";
import "./info.css";

const Information: React.FC = () => {
  return (
    <Layout activeSection="info" title="Information">
      <div className="info">
        <div>
          <div className="info-header">
            Welcome to our Big Fat Greek Wedding! 🇬🇷
          </div>
          <div className="info-subheader">
            We’re so excited to celebrate our love in the heart of Greece, and
            even more excited to have you join us! Here’s everything you need to
            know to plan your unforgettable trip to Athens
          </div>
        </div>
        <div>
          <div className="info-header">Getting to Athens</div>
          <div className="info-subheader">
            <div>
              Athens is easily accessible with direct flights from many
              international cities. The main airport that you would be flying
              into is Athens Eleftherios Venizelos International Airport.
            </div>
            <div>
              It is located approximately 33 kilometers (20 miles) southeast of
              downtown Athens and is easily accessible by various transportation
              options. If you’re traveling to the city center, you can take the
              Metro Line 3 (Blue Line) directly to the airport, with a journey
              time of about 40 minutes.
            </div>
            <div>
              Alternatively, the X95 Airport Express Bus runs frequently from
              Syntagma Square, providing an affordable and convenient option.
            </div>
            <div>
              Taxis and ride-share services are widely available, offering a
              more direct route in about 30-40 minutes, depending on traffic.
              For those arriving by car, the airport is well-connected via the
              Attiki Odos toll road. Whether you’re flying in or out, the
              airport is modern, efficient, and equipped with excellent
              facilities to ensure a smooth travel experience.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Information;
