import type { NextPage } from 'next';
import ContactForm from '../components/Contact/ContactForm';

const Contact: NextPage = () => {
  const handleSubmit = async (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return <ContactForm handleSubmit={handleSubmit} />;
};

export default Contact;
