import React from 'react';
import Image from 'next/image';

import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/img/site/hugh.jpg"
          alt="an image showing Hugh"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Hugh</h1>
      <p>
        I blog about web development - especially frontend framework like React
        and Vue
      </p>
    </section>
  );
};

export default Hero;
