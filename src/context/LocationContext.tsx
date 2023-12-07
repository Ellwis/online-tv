import axios from 'axios';
import { useEffect, useContext, createContext, useState, ReactNode } from 'react';

export const IpContext = createContext('');

interface LocationContextProps {
  children: ReactNode; // This is the correct type for children
}

const LocationContext: React.FC<LocationContextProps> = ({ children }) => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    const ipDetector = async () => {
      try {
        const res = await axios.get('http://ip-api.com/json/');
        const country = res.data.country;
        setLocation(country);
        console.log(country);
      } catch {
        console.error('Error during IP detection');
      }
    };
    ipDetector();
  }, []);

  return <IpContext.Provider value={location}>{children}</IpContext.Provider>;
};

export default LocationContext;