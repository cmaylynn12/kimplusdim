import axios from "axios";
import { createContext, useEffect, useState } from "react";

export interface AppState {
  isLoading: boolean;
  info: any;
  setInfo: (data: any) => void;
  slugs: any;
  fetchData: () => void;
  unmute: () => void;
  mute: () => void;
  isMuted: boolean;
  setIsMuted: (mute: boolean) => void;
  isMobile: boolean;
}

interface AppWrapperProps {
  children: React.ReactNode;
}

export const AppContext = createContext<AppState>({} as AppState);

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const [info, setInfo] = useState();
  const [slugs, setSlugs] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [audio] = useState(new Audio("/music.m4a"));
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(window.outerWidth <= 1065);

  const handleWindowSizeChange = () => {
    setIsMobile(window.outerWidth <= 1065);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const unmute = () => {
    audio.play();
  };

  const mute = () => {
    audio.pause();
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}?type=info`
      );
      setInfo(response.data);
      const slugs = await axios.get(
        `${process.env.REACT_APP_API_URL}?type=slugs`
      );
      setSlugs(slugs.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const state: AppState = {
    isLoading,
    info,
    setInfo,
    slugs,
    fetchData,
    unmute,
    mute,
    isMuted,
    setIsMuted,
    isMobile,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppContext;
