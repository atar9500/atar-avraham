import { useRef, useEffect } from 'react';
import { useScrollTrigger } from '@mui/material';

const useScrollHeader = () => {
  const windowRef = useRef<Window>();

  useEffect(() => {
    windowRef.current = window;
  }, []);

  return useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: windowRef.current,
  });
};

export default useScrollHeader;
