import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export interface AppState {
  isLoading: boolean;
  info: any;
  setInfo: (data: any) => void;
  fetchData: () => void;
  unmute: () => void;
  mute: () => void;
  isMuted: boolean;
  setIsMuted: (mute: boolean) => void;
}

interface AppWrapperProps {
  children: React.ReactNode;
}

export const AppContext = createContext<AppState>({} as AppState);

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {

  const [ info, setInfo ] = useState();
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState<any>(null);
  const [ audio ] = useState(new Audio("/music.m4a"));
  const [ isMuted, setIsMuted ] = useState(true);

  const unmute = () => {
    audio.play();
  }

  const mute = () => {
    audio.pause();
  }
  
  const fetchData = async() => {
    setIsLoading(true);

    try {
      const response = await axios.get("https://script.google.com/macros/s/AKfycbx80gbBodG6b_u4ZIjK7WEz9RQdFFumPmLiA-kjKxU70MEGqzDqDqZjaRaqgBYurTDl/exec?type=info");
      setInfo(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  const state: AppState = {
    isLoading,
    info,
    setInfo,
    fetchData,
    unmute,
    mute,
    isMuted,
    setIsMuted
  }

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export default AppContext;