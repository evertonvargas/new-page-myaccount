interface Link {
  name: string;
  path: string;
}

export interface LinkProps {
  render: (links: Link[]) => JSX.Element;
}