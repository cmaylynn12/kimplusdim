import { useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import "./rsvp.css";
import RSVPSubmitted from "./rsvpSubmitted";
import Checkbox from "../checkbox/checkbox";
import RSVPInput from "../input/input";
import Layout from "../layout/layout";
import AppContext from "../../contexts/AppContext";


const RSVP: React.FC = () => {

  const { name, guestList } = useLocation().state;
  const { slug } = useParams();
  
  //Flags
  const [ moreGuests, setMoreGuests ] = useState(false);
  const [ isSubmitted, setIsSubmitted ] = useState(false);

  //Form data
  const [ rsvps, setRsvps ] = useState([name]);
  const [ rsvpAnswer, setRsvpAnswer ] = useState();
  const [ song, setSong ] = useState("");

  const { fetchData } = useContext(AppContext); 

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("guests", JSON.stringify(rsvps))
    formData.append("answer", rsvpAnswer === "Joyfully accepts" ? "Yes" : "No")
    formData.append("songRequest", song)

    fetch("https://script.google.com/macros/s/AKfycbx80gbBodG6b_u4ZIjK7WEz9RQdFFumPmLiA-kjKxU70MEGqzDqDqZjaRaqgBYurTDl/exec", {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
    .then(() => {setIsSubmitted(true); fetchData()})
  }

  const handleAttending = (e: any) => {
    if (e.target.checked) {
      rsvps.push(e.target.name)
      
    } else {
      const list = rsvps.filter((rsvp: any) => rsvp !== e.target.name)
      setRsvps(list)
    }
  }

  return (
  <Layout activeSection="rsvp">
    <div className="form-container">
      <div className="heading">
        <span className="form-header">RSVP</span>
        <div className="form-subheader">
          <span>We look forward to celebrating with you!</span>
          <span>Your response is kindly requested by the 30th of December 2024</span>
        </div>
      </div>
      { !isSubmitted ? 
        <form onSubmit={handleSubmit} className="form">
        <RSVPInput fieldName="Name" fieldValue={name} disabled={true}/>
        <div className="rsvp-container">
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
                  <Checkbox name={guest.name} onChange={(e) => handleAttending(e)}/>
                </div>
              )}
            </div>
          )}
        </div>}
        <RSVPInput fieldName="What's a song that will get you on the dance floor?" fieldValue={song} onChange={(songSuggestions) => setSong(songSuggestions)}/>
        {
          rsvpAnswer && <input className="input-button" type="submit" value="Submit"/>
        }
      </form> : <RSVPSubmitted />
      }
    </div>
  </Layout>
  )
}

export default RSVP;