import * as React from 'react';
import Link from 'next/link';
const Card = ({ name, email, id }) => {
  return (
    <Link href={`robot?id=${id}`} as={`/robot/${id}`}>
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    </Link>
  );
};

export default Card;