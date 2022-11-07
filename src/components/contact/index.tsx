import * as s from './styles';
import ContactForm from './contact-form';
import ContactInfo from './contact-info';

export default function Contact() {
  return (
    <s.Contact id="contact">
      <s.Title>Contact</s.Title>
      <s.Container>
        <ContactInfo />
        <ContactForm />
      </s.Container>
    </s.Contact>
  );
}
