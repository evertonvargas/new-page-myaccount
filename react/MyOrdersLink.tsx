import { FC } from 'react';
import { LinkProps } from './typings/types';
import constants from './constants';

const MyOrdersLink: FC<LinkProps> = ({ render }) => {
  return render([
    {
      name: constants['label-orders'],
      path: constants['path-orders'],
    },
  ]);
};

export default MyOrdersLink;

