import styles from './PostHeader.module.scss';

import React from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  image: string;
};

const PostHeader: React.FC<Props> = ({ title, image }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      {image && <Image src={image} alt={title} width={200} height={150} />}
    </header>
  );
};

export default PostHeader;
