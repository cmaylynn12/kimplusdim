import { useContext, useEffect, useState } from 'react';
import MenuItem from '../menuItem/menuItem';
import './layout.css';
import AppContext from '../../contexts/AppContext';

interface LayoutProps {
  children?: React.ReactNode;
  activeSection: "home" | "accommodation" | "wedding" | "rsvp" | "registry" | "activities" | "faqs";
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({children, activeSection, title}: LayoutProps) => {
  
  const { mute, unmute, isMuted, setIsMuted } = useContext(AppContext);

  const handleSoundButtonToggle = () => {
    if (isMuted) {
      unmute();
    } else {
      mute();
    }
    setIsMuted(!isMuted)
  }

  return (
    <>
      <div className='body'>
        <div className='header'>
          <div className='menu'>
            <MenuItem activeSection={activeSection} section='home' title='Home' urlPath='/'/>
            <MenuItem activeSection={activeSection} section= 'accommodation' title='Accommodation' urlPath='/accommodation'/>
            <MenuItem activeSection={activeSection} section= 'wedding' title='Wedding' urlPath='/wedding'/>
            <MenuItem activeSection={activeSection} section= 'activities' title='Things to Do' urlPath='/activities'/>
            <MenuItem activeSection={activeSection} section= 'registry' title='Registry' urlPath='/registry'/>
            <MenuItem activeSection={activeSection} section= 'faqs' title='FAQs' urlPath='/faqs'/>
            <MenuItem activeSection={activeSection} section= 'rsvp' title='RSVP' urlPath='/rsvp'/>
          </div>     
        </div> 
        <button onClick={handleSoundButtonToggle}>{isMuted ? "PLAY" : "PAUSE"}</button>
        <div className='main'>
          { title && <p className="title">{title}</p>}
          {children}
        </div>
    </div>
    </>
  )
}

export default Layout;