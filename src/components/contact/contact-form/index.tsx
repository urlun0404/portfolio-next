import * as s from './styles';

export default function ContactForm() {
  const submitForm = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <s.Form
      onSubmit={submitForm}
      action="https://formsubmit.co/urlun0404@gmail.com"
      method="POST"
    >
      <s.Label htmlFor="name">Name</s.Label>
      <s.Input id="name" name="name" type="text" />
      <s.Label htmlFor="email">Email</s.Label>
      <s.Input id="email" name="email" type="email" required />
      <s.Label htmlFor="subject">Subject</s.Label>
      <s.Input id="subject" name="_subject" type="text" required />
      <s.Label htmlFor="message">Message</s.Label>
      <s.TextArea id="message" name="message" />
      <s.SendBtn type="submit">Send Message</s.SendBtn>
    </s.Form>
  );
}
