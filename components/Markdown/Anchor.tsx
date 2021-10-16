import React from 'react';

const Anchor = (props: any) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer" {...props}>
      {props.children}
    </a>
  );
};

export default Anchor;
