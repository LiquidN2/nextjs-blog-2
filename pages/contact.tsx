import type { NextPage } from 'next';

import Head from 'next/head';
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

      return await response.json();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return (
    <>
      <Head>
        <title>Do you have any questions? Contact me 😃</title>
      </Head>
      <ContactForm handleSubmit={handleSubmit} />
    </>
  );
};

export default Contact;
