import { useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { useCachedState } from './useCachedState';

export const useIsForeground = () => {
  const [isForeground, setIsForeground] = useCachedState(true);

  useEffect(() => {
    const onChange = (state) => {
      setIsForeground(state === 'active');
    };
    AppState.addEventListener('change', onChange);
    return () => AppState.removeEventListener('change', onChange);
  }, [setIsForeground]);

  return isForeground;
};