import * as s from './styles';
import { useEffect, useRef } from 'react';

interface Props {
  setIsNavbarFixed: (param: boolean) => void;
}

export default function Header(props: Props) {
  const observedRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (observedRef.current) {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) {
          props.setIsNavbarFixed(true);
        } else {
          props.setIsNavbarFixed(false);
        }
      });

      observer.observe(observedRef.current);
    }
  }, [observedRef, props.setIsNavbarFixed]);

  return <s.DummyHeader ref={observedRef} />;
}
