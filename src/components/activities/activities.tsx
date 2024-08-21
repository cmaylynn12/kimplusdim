import Layout from "../layout/layout"
import "./activities.css";

const Activities: React.FC = () => {
  return (
    <Layout activeSection="activities">
      <div className="activities">
        Travel Information

        To help you make the most out of your holiday, please find our travel tips below!

        Weather:

        Our wedding will be hosted during summer, so you can expect warm, humid weather with some rainfall. 

        Transport:

        Hiring a car is the best way to get around Hawaii, but there are plenty of rideshare services available throughout Honolulu including Uber and Lyft.

        Things to See and Do:

        Honolulu is one of our favourite holiday destinations! Check out some of our most-loved cafes, restaurants, beaches and tourist attractions below to help you plan the perfect itinerary.    
      </div>
</Layout>
  )
}

export default Activities;