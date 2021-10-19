import styles from './ContactForm.module.scss';

import React, {ChangeEventHandler, FormEventHandler, useState} from 'react';
import {isValidEmail} from '../../utils/helpers';

type Props = {
  handleSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
};

const ContactForm: React.FC<Props> = props => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = event => {
    switch (event.currentTarget.id) {
      case 'email':
        setEmail(event.currentTarget.value);
        break;

      case 'name':
        setName(event.currentTarget.value);
        break;

      case 'message':
        setMessage(event.currentTarget.value);
        break;
    }
  };

  const handleSubmit: FormEventHandler = async event => {
    event.preventDefault();

    try {
      const formData = {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      };

      const invalidData =
        !isValidEmail(formData.email) || !formData.name || !formData.message;

      if (invalidData) throw 'invalid input';

      await props.handleSubmit(formData);
    } catch (err) {
      throw err;
    }
  };

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className={styles.controls}>
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={message}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.actions}>
          <button>Send message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
