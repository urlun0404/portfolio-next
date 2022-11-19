import React, { useState, useEffect } from 'react';

interface Props {
  observedRef: React.RefObject<Element>;
  callback?: IntersectionObserverCallback;
  options?: any;
  willUnObserve?: boolean;
}

export default function useInView(props: Props) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (props.observedRef.current) {
      const observer = new IntersectionObserver(
        props.callback
          ? props.callback
          : (entries) => {
              if (entries[0].isIntersecting) {
                setIsInView(true);

                if (props.willUnObserve || true) {
                  observer.unobserve(entries[0].target);
                }
              } else {
                setIsInView(false);
              }
            },
        props.options,
      );
      observer.observe(props.observedRef.current);
    }
  }, [props]);

  return { isInView };
}
