import { FC } from 'react';
import { LinkProps } from './typings/types';
import constants from './constants';

const MyAppLink: FC<LinkProps> = ({ render }) => {
  return render([
    {
      name: constants["label-app"],
      path: constants['path-app'],
    },
  ]);
};

export default MyAppLink;

