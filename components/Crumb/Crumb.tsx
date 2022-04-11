import React from 'react';
import Link from 'next/link';

type Props = {
  crumb:{
    text: string,
    href: string,
    last: boolean,
  }
};

function Crumb({crumb}: Props) {
  
    if (crumb.last) {
      return <div color="text.primary">{crumb.text}</div>
    }
  
    return (
      <Link href={crumb.href}>
        {crumb.text}
      </Link>
    );
}
export default Crumb;
