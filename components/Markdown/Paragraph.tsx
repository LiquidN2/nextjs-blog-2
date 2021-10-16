import styles from './Markdown.module.scss';
import Image from 'next/image';
import React from 'react';

// Convert Markdown img to next/image component and set height, width and priority
// example: ![AltText {priority}{768x432}](...
const Paragraph = (props: any) => {
  const { node } = props;

  // if the first child node is img, map this p component to Image
  if (node.children[0].tagName === 'img') {
    const image = node.children[0];
    const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, '');
    const isPriority = image.properties.alt
      ?.toLowerCase()
      .includes('{priority}');
    const metaWidth = image.properties.alt.match(/{([^}]+)x/);
    const metaHeight = image.properties.alt.match(/x([^}]+)}/);
    const width = metaWidth ? metaWidth[1] : '600';
    const height = metaHeight ? metaHeight[1] : '300';

    return (
      <div className={styles.image}>
        <Image
          src={image.properties.src}
          width={width}
          height={height}
          alt={alt}
          priority={isPriority}
        />
      </div>
    );
  }

  // else return a normal p component
  return <p>{props.children}</p>;
};

export default Paragraph;
