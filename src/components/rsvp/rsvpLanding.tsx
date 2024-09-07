import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/layout";

import "./rsvp.css";
import AppContext from "../../contexts/AppContext";
import RSVPInput from "../input/input";
import Loader from "../loader/loader";

const RSVPLanding: React.FC = () => {

  const navigate = useNavigate();
  const [ name, setName ] = useState("");

  const { info, isLoading } = useContext(AppContext);
  const [ error, setError ] = useState<null | string>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let invited = false;
    info.guests.map((guest: any) => {
      if (guest.name === name) {
        invited = true;
        if (!info.rsvpList.includes(name)) {
          navigate(`/rsvp/${guest.slug}`, { state: { name: name, count: info.guests.length, guestList: info.guests.filter((person: any) => person.name !== name && person.slug === guest.slug && !info.rsvpList.includes(person.name) )}});
          return;
        } else {
          setError('It seems you have already responded! If you have any concerns, please reach out to us at dimoandkimo@gmail.com :)')
          return;
        }
      }
    })
    
    if (!invited) {
      setError('Hmm, something went wrong there. Please ensure you are entering your name as stated in the invite, otherwise please contact us at dimoandkimo@gmail.com')
    }
  }

  return (
    <Layout activeSection="rsvp" title="RSVP">
      { isLoading ? <Loader /> : 
      <div className="landing-form-container">
      <img src="/cupid.png" height={200} width={200}/>

      <form onSubmit={handleSubmit} className="landing-form">
        <div className="form-text">
          <p>Please enter your name as stated in the invitation.</p>
          <div>If you're responding for you and on behalf of others, you'll be able to RSVP for your entire group on the next page.</div>
        </div>
        <RSVPInput fieldName={"Name"} fieldValue={name} disabled={false} onChange={(name) => {setName(name); setError(null)}} />
        { error && <div>{error}</div>}
        <input className="input-button" type="submit" value="Continue" disabled={!name && !error}/>
      </form>
    </div>
      }
    </Layout>
  )
}

export default RSVPLanding;