import "./App.css";

import "./fonts/IrishBelle.ttf";

import Home from "./components/home/home";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Wedding from "./components/wedding/wedding";
import RSVP from "./components/rsvp/rsvp";
import Activities from "./components/activities/activities";
import FAQs from "./components/faqs/faqs";
import Accommodation from "./components/accommodation/accommodation";
import Registry from "./components/registry/registry";
import RSVPLanding from "./components/rsvp/rsvpLanding";
import RSVPError from "./components/rsvp/rsvpError";
import { AppWrapper } from "./contexts/AppContext";
import Information from "./components/information/info";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LinkError from "./components/errors/linkError";
import Culture from "./components/culture/culture";
import Koumparoi from "./components/koumparoi/koumparoi";

const queryClient = new QueryClient();

function App() {
  return (
    <AppWrapper>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/accommodation/:place" element={<Accommodation />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/rsvp" element={<RSVPLanding />} />
            <Route path="/information" element={<Information />} />
            <Route path="/koumparoi" element={<Koumparoi />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/rsvp/form" element={<RSVP />} />
            <Route path="/rsvp/error" element={<RSVPError />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="*" element={<LinkError />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AppWrapper>
  );
}

export default App;
