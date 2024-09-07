import { useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import "./rsvp.css";
import RSVPSubmitted from "./rsvpSubmitted";
import Checkbox from "../checkbox/checkbox";
import RSVPInput from "../input/input";
import Layout from "../layout/layout";
import AppContext from "../../contexts/AppContext";
import LinkError from "../errors/linkError";
import Loader from "../loader/loader";


const RSVP: React.FC = () => {

  const { fetchData, info, isLoading, slugs } = useContext(AppContext); 

  const [name, setName ] = useState(useLocation().state?.name);
  const [guestList, setGuestList] = useState(useLocation().state?.guestList);
  const { id } = useParams();

  //Flags
  const [ moreGuests, setMoreGuests ] = useState(false);
  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const [ isSubmitting, setIsSubmitting ] = useState(false);

  //Form data
  const [ rsvps, setRsvps ] = useState(name ? [name]: []);
  const [ rsvpAnswer, setRsvpAnswer ] = useState();
  const [ song, setSong ] = useState("");
  const [ error, setError ] = useState<null | string>(null);

  //TEST
  const [ currentGuest, setCurrentGuest ] = useState(name ? name : undefined);
  const allResponded = info && info.guests.filter((guest: any) => guest.slug === id).every((person: any) => info.rsvpList.includes(person.name))


  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();

    formData.append("guests", JSON.stringify(rsvps))
    formData.append("answer", rsvpAnswer === "Joyfully accepts" ? "Yes" : "No")
    formData.append("songRequest", song)

    fetch(`${process.env.REACT_APP_API_URL}`, {
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

  // const getGuest = (guestList: any[], guestName: string) => {
  //   for (let i=0; i < guestList.length; i++) {
  //     if (guestList[i].name === guestName) {
  //       return guestList[i];
  //     }
  //   }
  //   return false;
  // }

  const handleRsvp = (e: any) => {
    if (rsvpAnswer === e.target.name) {
      setRsvpAnswer(undefined);
    } else {
      setRsvpAnswer(e.target.name)
    }
  }

  const handleContinue = (e: any) => {
    e.preventDefault();

      if (info.rsvpList.includes(name)) {
        setError('It seems you have already responded! If you have any concerns, please reach out to us at dimoandkimo@gmail.com :)')
        return;
      }
      
      for (let i=0; i < info.guests.length; i++) {
        if (info.guests[i].name === name) {
          if (info.guests[i].slug === id) {
            rsvps.push(name)
            // setName(e.target.value)
            setCurrentGuest(info.guests[i])
            setGuestList(info.guests.filter((guest: any) => guest.name !== name && guest.slug === id && !info.rsvpList.includes(guest.name) ))
            setError(null);
            return;
          } else {
            setError('It appears that your name does not match the unique url for your group, please reach out to us at dimoandkimo@gmail.com :)');
            return;
          }
        } else {
          setError('Hmm, something went wrong there. Please ensure you are entering your name as stated in the invite, otherwise please contact us at dimoandkimo@gmail.com')

        }
      }

      // if (getGuest(info.guests, name)) {
      //   console.log(name)
      //   console.log('here')
      //   setCurrentGuest(getGuest(info.guests, name))
      // }
  }

  const handleEnter = (e: any) => {

    setError(null);

    if (e.key === 'Enter') {
      handleContinue(e);
    }
  }


  return (
  <Layout activeSection="rsvp">
    { isLoading || isSubmitting ? <Loader /> : !slugs.includes(id) ? <LinkError /> : <div className="form-container">
      <div className="heading">
        <span className="form-header">RSVP</span>
        <div className="form-subheader">
          <span>We look forward to celebrating with you!</span>
          <span>Your response is kindly requested by the 30th of December 2024</span>
        </div>
      </div>
      { allResponded && !isSubmitted ? <div>{`It seems all members of your group have responded. We appreciate the promptness! :)`}</div> : !isSubmitted ? 
        <form onSubmit={handleSubmit} className="form">
        <RSVPInput fieldName="Name" fieldValue={name} disabled={currentGuest !== undefined} onEnter={handleEnter} onChange={(name) => setName(name)} />
        { error && <div>{error}</div>}
        { currentGuest && !error &&
        <><div className="rsvp-container">
          <Checkbox name="Joyfully accepts" checked={rsvpAnswer === "Joyfully accepts"} onChange={(e) => handleRsvp(e)}/>
          <Checkbox name="Regretfully declines" checked={rsvpAnswer === "Regretfully declines"} onChange={(e) => handleRsvp(e)}/>
        </div>
        <hr className="border"/>
        { guestList && guestList.length >= 1 && 
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
        <RSVPInput fieldName="Any song requests?" fieldValue={song} onChange={(songSuggestions) => setSong(songSuggestions)}/>
        <input className="input-button" type="submit" value="Submit" disabled={!rsvpAnswer || isSubmitting}/>
        </>}
        {!currentGuest && <button className="input-button" disabled={!name} onClick={handleContinue}>Continue</button>}
      </form> : <RSVPSubmitted />
      }
    </div>}
  </Layout>
  )
}

export default RSVP;