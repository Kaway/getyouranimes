import React from 'react';
import {Badge} from 'reactstrap';

const CounterBadge = ({count, children}) => {
  return (
      <h4><Badge color="primary">{count} {children}</Badge></h4>
  );
};

export default CounterBadge;
