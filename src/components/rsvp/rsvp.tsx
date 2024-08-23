import { useLocation, useParams } from "react-router-dom";
import { useContext, useState } from "react";

import "./rsvp.css";
import RSVPSubmitted from "./rsvpSubmitted";
import Checkbox from "../checkbox/checkbox";
import RSVPInput from "../input/input";
import Layout from "../layout/layout";
import AppContext from "../../contexts/AppContext";


const RSVP: React.FC = () => {

  const { fetchData, info, isLoading, isMobile } = useContext(AppContext); 

  const [name, setName ] = useState(useLocation().state?.name);
  const [guestList, setGuestList] = useState(useLocation().state?.guestList);
  const { id } = useParams();

  
  //Flags
  const [ moreGuests, setMoreGuests ] = useState(false);
  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const allResponded = info && info.guests.filter((guest: any) => guest.slug === id).every((person: any) => info.rsvpList.includes(person.name))

  //Form data
  const [ rsvps, setRsvps ] = useState(name ? [name]: []);
  const [ rsvpAnswer, setRsvpAnswer ] = useState();
  const [ song, setSong ] = useState("");
  const [ error, setError ] = useState<null | string>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();

    formData.append("guests", JSON.stringify(rsvps))
    formData.append("answer", rsvpAnswer === "Joyfully accepts" ? "Yes" : "No")
    formData.append("songRequest", song)

    fetch("https://script.google.com/macros/s/AKfycbx80gbBodG6b_u4ZIjK7WEz9RQdFFumPmLiA-kjKxU70MEGqzDqDqZjaRaqgBYurTDl/exec", {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
    .then(() => {setIsSubmitted(true); fetchData(); setIsSubmitting(false);})
  }

  const handleAttending = (e: any) => {
    if (e.target.checked) {
      rsvps.push(e.target.name)
      
    } else {
      const list = rsvps.filter((rsvp: any) => rsvp !== e.target.name)
      setRsvps(list)
    }
  }

  const handleEnter = (e: any) => {

    setError(null);

    if (e.key === 'Enter') {
      e.preventDefault();

      if (info.rsvpList.includes(e.target.value)) {
        setError('It seems you have already responded! If you have any concerns, please reach out to us at dimoandkimo@gmail.com :)')
        return;
      }
      
      for (let i=0; i < info.guests.length; i++) {
        if (info.guests[i].name === e.target.value) {
          if (info.guests[i].slug === id) {
            rsvps.push(e.target.value)
            setName(e.target.value)
            setGuestList(info.guests.filter((guest: any) => guest.name !== e.target.value && guest.slug === id && !info.rsvpList.includes(guest.name) ))
            setError(null);
          } else {
            setError('It appears that your name does not match the unique url for your group, please reach out to us at dimoandkimo@gmail.com :)')
          }
        }
      }
    }
  }
  return (
  <Layout activeSection="rsvp">
    { isLoading ? <img className="pulse" src="/cupid.png"/> : <div className="form-container">
      <div className="heading">
        <span className="form-header">RSVP</span>
        <div className="form-subheader">
          <span>We look forward to celebrating with you!</span>
          <span>Your response is kindly requested by the 30th of December 2024</span>
        </div>
      </div>
      { allResponded ? <div>{`It seems all members of your group have responded. We appreciate the promptness! :)`}</div> : !isSubmitted ? 
        <form onSubmit={handleSubmit} className="form">
        <RSVPInput fieldName="Name" fieldValue={name} disabled={name !== undefined} onEnter={handleEnter}/>
        { error && <div>{error}</div>}
        { name && !error &&
        <><div className="rsvp-container">
          <Checkbox name="Joyfully accepts" checked={rsvpAnswer === "Joyfully accepts"} onChange={(e) => setRsvpAnswer(e.target.name)}/>
          <Checkbox name="Regretfully declines" checked={rsvpAnswer === "Regretfully declines"} onChange={(e) => setRsvpAnswer(e.target.name)}/>
        </div>
        { guestList.length >= 1 && 
        <div className="guest-list-container">
          <Checkbox name="Are you rsvp-ing on behalf of anyone else?" onChange={() => {setMoreGuests(!moreGuests); setRsvps([name])}}/>
          { moreGuests && (
            <div className="guest-list">
              { guestList.map((guest: any) => 
                <div className="additional-guest">
                  <Checkbox key={guest} name={guest.name} onChange={(e) => handleAttending(e)}/>
                </div>
              )}
            </div>
          )}
        </div>}
        <RSVPInput fieldName="What's a song that will get you on the dance floor?" fieldValue={song} onChange={(songSuggestions) => setSong(songSuggestions)}/>
        {
          rsvpAnswer && <input className="input-button" type="submit" value="Submit" disabled={isSubmitting}/>
        }
        </>}
      </form> : <RSVPSubmitted />
      }
    </div>}
  </Layout>
  )
}

export default RSVP;