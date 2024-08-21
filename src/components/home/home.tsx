import Layout from "../layout/layout";
import './home.css';

const Home: React.FC = () => {
  return (
    <Layout activeSection="home">
      <div className="container">
        <img src="./icon.png" className="" height={650} width={650}/>
        {/* <img src="./cupid.png" className="cupid" height={500} width={500}/> */}
        <div className="venue-info">
          <span className="venue">at Island Art & Taste Gallery</span>
          <span className="address">Leoforos Poseidonos 66, Vari 166 72</span>
        </div>
        <button className="input-button">RSVP</button>
      </div>
      {/* <img src="./geia-sou.png"/>
      <p>

Welcome to our wedding website – we’re so glad you’re here.

We’ve created this website as a helpful resource for our upcoming wedding in Hawaii.

Here, you’ll find our schedule of events, travel information and some FAQs about the day.

We’d love for you to take a look around and learn more about our destination wedding plans. 

Finally, thank you for all of your love and support so far. We can’t wait to share the adventure of a lifetime with our favourite group of people!

Love, Kim and Dim
      </p> */}

    </Layout>
  )
}

export default Home;