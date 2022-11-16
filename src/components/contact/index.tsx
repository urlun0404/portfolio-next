import * as s from './styles';
import ContactForm from './contact-form';
import ContactInfo from './contact-info';
import { useState, useRef, useEffect } from 'react';

export default function Contact() {
  const [isInView, setIsInView] = useState(false);
  const observedRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (observedRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          } else {
            setIsInView(false);
          }
        },
        {
          threshold: 0.1,
          rootMargin: '10px',
        },
      );

      observer.observe(observedRef.current);
    }
  }, [observedRef]);

  return (
    <s.Contact
      id="contact"
      ref={observedRef}
      className={isInView ? '' : 'hidden'}
    >
      <s.Title>Contact</s.Title>
      <s.Container id="contact-container">
        <ContactInfo />
        <ContactForm />
      </s.Container>
    </s.Contact>
  );
}
