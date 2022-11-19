import * as s from './styles';
import ContactForm from './contact-form';
import ContactInfo from './contact-info';
import { useRef, useMemo } from 'react';
import useInView from 'hooks/use-in-view';

const options = {
  threshold: 0.3,
  rootMargin: '20px',
};

export default function Contact() {
  const observedRef = useRef<HTMLElement>(null);
  const { isInView } = useInView(
    useMemo(() => {
      return {
        observedRef,
        options: options,
      };
    }, [observedRef]),
  );

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
