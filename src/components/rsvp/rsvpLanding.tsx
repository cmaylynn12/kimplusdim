import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/layout";

import "./rsvp.css";
import AppContext from "../../contexts/AppContext";
import RSVPInput from "../input/input";
import Loader from "../loader/loader";
import Button from "../button/button";
import { useQuery } from "@tanstack/react-query";

const RSVPLanding: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const [error, setError] = useState<null | string>(null);

  const { data, isFetching } = useQuery({
    queryKey: ["get-info"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}?type=info`).then((res) =>
        res.json()
      ),
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (data.rsvpList.includes(name.toLowerCase())) {
      setError(
        "It seems you have already responded! If you think this might be a mistake, please reach out to us :)"
      );
      return;
    }

    data.guests.map((guest: any) => {
      if (guest.name.toLowerCase() === name.toLowerCase()) {
        navigate(`/rsvp/form`, {
          state: {
            name: guest.name,
            count: data.guests.length,
            guestList: data.guests.filter(
              (person: any) =>
                person.name.toLowerCase() !== name.toLowerCase() &&
                person.slug === guest.slug &&
                !data.rsvpList.includes(person.name.toLowerCase())
            ),
          },
        });
      } else {
        setError(
          "Hmm, something went wrong there. Please ensure you are entering your name as stated in the invite, otherwise please reach out to us :)"
        );
      }
    });
  };

  return (
    <Layout activeSection="rsvp" title="RSVP">
      <div className="landing-form-container">
        <img
          src="/cupid-arrow.png"
          height={200}
          width={200}
          className={isFetching ? "pulse" : ""}
        />
        <form
          onSubmit={handleSubmit}
          className={`landing-form ${isFetching ? "" : "expanded"}`}
        >
          <div className="form-text">
            <p>Please enter your name as stated in the invitation.</p>
            <div>
              If you're responding for you and on behalf of others, you'll be
              able to RSVP for your entire group on the next page.
            </div>
          </div>
          <RSVPInput
            fieldName={"Name"}
            fieldValue={name}
            disabled={false}
            onChange={(name) => {
              setName(name);
              setError(null);
            }}
          />
          {error && <div>{error}</div>}
          <input
            className="input-button"
            type="submit"
            value="Continue"
            disabled={!name && !error}
          />
        </form>
      </div>
    </Layout>
  );
};

export default RSVPLanding;
