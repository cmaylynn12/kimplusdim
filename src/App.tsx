import './App.css';

import './fonts/IrishBelle.ttf';

import Home from './components/home/home';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Wedding from './components/wedding/wedding';
import RSVP from './components/rsvp/rsvp';
import Activities from './components/activities/activities';
import FAQs from './components/faqs/faqs';
import Accommodation from './components/accommodation/accommodation';
import Registry from './components/registry/registry';
import RSVPLanding from './components/rsvp/rsvpLanding';
import RSVPError from './components/rsvp/rsvpError';
import { AppWrapper } from './contexts/AppContext';

function App() {
  
  return (
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/rsvp" element={<RSVPLanding />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/rsvp/:id" element={<RSVP />} />
          <Route path="/rsvp/error" element={<RSVPError />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
