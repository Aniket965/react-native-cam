import { useCallback, useRef, useState } from 'react';


export const useCachedState = (initialValue, comparator) => {
  const [state, setState] = useState(initialValue);
  const cachedState = useRef(initialValue);

  const dispatchState = useCallback(
    (newState) => {
      const areEqual = comparator == null ? cachedState.current === newState : comparator(cachedState.current, newState);
      if (areEqual) {
        return;
      } else {
        cachedState.current = newState;
        setState(newState);
      }
    },
    [comparator],
  );

  return [state, dispatchState];
}