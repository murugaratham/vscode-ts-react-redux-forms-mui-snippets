import * as React from 'react';

export interface StatelessProps {
  // props
}

const Stateless: React.SFC<StatelessProps> = props => {
  // const { props } = props;
  return <span>Body</span>;
};

export default Stateless;
