import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import Image from './Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={require('./../images/logo.svg')}
            alt="Open"
            width={48}
            height={48}
            className={'rounded-full'} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;