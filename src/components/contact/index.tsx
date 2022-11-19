import * as s from './styles';
import ContactForm from './contact-form';
import ContactInfo from './contact-info';
import { useRef } from 'react';
import useInView from 'hooks/use-in-view';

export default function Contact() {
  const observedRef = useRef<HTMLElement>(null);
  const { isInView } = useInView({
    observedRef,
    options: {
      threshold: 0.3,
      rootMargin: '20px',
    },
  });

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
