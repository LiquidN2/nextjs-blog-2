import styles from './ContactForm.module.scss';

import React, {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';
import Notification from '../UI/Notification';

import { isValidEmail } from '../../utils/helpers';

type Props = {
  handleSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => any;
};

type Request = {
  status: 'pending' | 'success' | 'error' | '';
  title: string;
  message: string;
};

const ContactForm: React.FC<Props> = props => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [request, setRequest] = useState<Request>({
    status: '',
    title: '',
    message: '',
  });

  // automatically clear 'success' and 'error' status after 3s
  useEffect(() => {
    if (!request.status || request.status === 'pending') return;

    const timer = setTimeout(() => {
      setRequest({
        status: '',
        title: '',
        message: '',
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [request]);

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

    setRequest({
      status: 'pending',
      title: 'sending message...',
      message: 'Your message is on its way',
    });

    try {
      const formData = {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      };

      const invalidData =
        !isValidEmail(formData.email) || !formData.name || !formData.message;

      if (invalidData) throw 'invalid input';

      const data = await props.handleSubmit(formData);

      if (!data || data.status === 'error' || data.status === 'fail')
        throw data.message;

      setRequest({
        status: 'success',
        title: 'Success!',
        message: 'Message has been sent.',
      });
    } catch (err) {
      setRequest({
        status: 'error',
        title: 'Error!',
        message: typeof err === 'string' ? err : 'Something went wrong',
      });
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
      {request.status && <Notification {...request} />}
    </section>
  );
};

export default ContactForm;
