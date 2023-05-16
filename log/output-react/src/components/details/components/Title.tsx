import { Drawer } from '@robocorp/components';
import { FC } from 'react';

import { Entry, Type } from '~/lib/types';

type Props = {
  entry: Entry;
};

const getTitle = (entry: Entry) => {
  switch (entry.type) {
    case Type.variable:
      return {
        title: entry.name,
        description: 'Variable',
      };
    case Type.log:
      return {
        title: 'Log entry',
        description: entry.status,
      };
    default:
      return {
        title: 'TODO: Provide title for ' + entry.type,
        description: 'TODO: Provide description for ' + entry.type,
      };
  }
};

export const Title: FC<Props> = ({ entry }) => {
  const { title, description } = getTitle(entry);

  return (
    <Drawer.Header>
      <Drawer.Header.Title title={title} />
      <Drawer.Header.Description>{description}</Drawer.Header.Description>
    </Drawer.Header>
  );
};
