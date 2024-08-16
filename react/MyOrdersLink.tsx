import { FC } from 'react';
import { LinkProps } from './typings/types';
import constants from './constants';

const MyOrdersLink: FC<LinkProps> = ({ render }) => {
  return render([
    {
      name: constants['label-order'],
      path: constants['path-order'],
    },
  ]);
};

export default MyOrdersLink;

