import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import "./rsvp.css";
import RSVPSubmitted from "./rsvpSubmitted";
import Checkbox from "../checkbox/checkbox";
import RSVPInput from "../input/input";
import Layout from "../layout/layout";
import AppContext from "../../contexts/AppContext";
import LinkError from "../errors/linkError";
import Loader from "../loader/loader";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const RSVP: React.FC = () => {
  const { isMobile } = useContext(AppContext);

  const name = useLocation().state?.name;
  const [contactNumber, setContactNumber] = useState("");
  const guestList = useLocation().state?.guestList;

  const navigate = useNavigate();

  //Flags
  const [moreGuests, setMoreGuests] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  //Form data
  const [rsvps, setRsvps] = useState([name]);
  const [rsvpAnswer, setRsvpAnswer] = useState();

  useEffect(() => {
    if (!name) {
      navigate("/rsvp");
    }
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newRsvp: any) => {
      return fetch(`${process.env.REACT_APP_API_URL}`, newRsvp);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      // setIsSubmitting(false);
      window.history.replaceState(null, "");
      queryClient.invalidateQueries({ queryKey: ["get-info"] });
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    // setIsSubmitted(true);

    const formData = new FormData();

    formData.append("guests", JSON.stringify(rsvps));
    formData.append("answer", rsvpAnswer === "Joyfully accepts" ? "Yes" : "No");
    formData.append("contactNumber", contactNumber);

    console.log(formData);
    mutation.mutate({
      method: "POST",
      mode: "no-cors",
      body: formData,
    });
  };

  const handleAttending = (e: any) => {
    if (e.target.checked) {
      rsvps.push(e.target.name);
    } else {
      const list = rsvps.filter((rsvp: any) => rsvp !== e.target.name);
      setRsvps(list);
    }
  };

  const handleRsvp = (e: any) => {
    if (rsvpAnswer === e.target.name) {
      setRsvpAnswer(undefined);
    } else {
      setRsvpAnswer(e.target.name);
    }
  };

  return (
    <Layout activeSection="rsvp" title=" ">
      <div style={{ width: "100%", paddingBottom: "60px" }}>
        <div className="form-container">
          <div className="heading">
            <span className="form-header">RSVP</span>
            {!isSubmitting && (
              <div className="form-subheader">
                <span>We look forward to celebrating with you!</span>
                <span>
                  Your response is kindly requested by the 31st of February 2024
                </span>
              </div>
            )}
          </div>
          {!isSubmitting ? (
            <form onSubmit={handleSubmit} className="form">
              <RSVPInput fieldName="Name" fieldValue={name} disabled />
              <div className="rsvp-container">
                <Checkbox
                  name="Joyfully accepts"
                  checked={rsvpAnswer === "Joyfully accepts"}
                  onChange={(e) => handleRsvp(e)}
                />
                <Checkbox
                  name="Regretfully declines"
                  checked={rsvpAnswer === "Regretfully declines"}
                  onChange={(e) => handleRsvp(e)}
                />
              </div>
              <hr className="border" />
              {guestList && guestList.length >= 1 && (
                <div className="guest-list-container">
                  <Checkbox
                    name="Are you rsvp-ing on behalf of anyone else?"
                    onChange={() => {
                      setMoreGuests(!moreGuests);
                      setRsvps([name]);
                    }}
                  />
                  {moreGuests && (
                    <div className="guest-list">
                      {guestList.map((guest: any) => (
                        <div className="additional-guest">
                          <Checkbox
                            key={guest}
                            name={guest.name}
                            onChange={(e) => handleAttending(e)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <input
                className="input-button"
                type="submit"
                value="Submit"
                disabled={!rsvpAnswer || isSubmitting}
              />
            </form>
          ) : (
            <>
              <img
                alt="pic of cupid"
                src="/cupid.png"
                height={isMobile ? 200 : 250}
                width={isMobile ? 200 : 250}
                className={!isSubmitted ? "pulse" : ""}
              />
              <RSVPSubmitted
                accepted={rsvpAnswer === "Joyfully accepts" ? true : false}
                isSubmitted={isSubmitted}
              />
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default RSVP;
