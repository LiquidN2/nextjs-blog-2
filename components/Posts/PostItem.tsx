import styles from './PostItem.module.scss';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { formatDate } from '../../utils/helpers';

import type { Post } from '../../types/Post';

export type Props = Post;

const PostItem: React.FC<Props> = ({
  title = 'My blog title',
  date = '14th Oct 2021',
  excerpt = 'Excerpt text here',
  image,
  slug = 'my-blog-post',
}) => {
  return (
    <li className={styles.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          {image && (
            <div className={styles.image}>
              <Image
                src={image.url}
                alt={title}
                width={300}
                height={200}
                layout="responsive"
              />
            </div>
          )}
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formatDate(date)}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
