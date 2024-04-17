import { FC } from 'react';
import { LinkProps } from './typings/types';
import constants from './constants';

const MyAppLink: FC<LinkProps> = ({ render }) => {
  return render([
    {
      name: constants['label-user'],
      path: constants['path-user'],
    },
  ]);
};

export default MyAppLink;

