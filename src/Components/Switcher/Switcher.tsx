import React, {Fragment} from 'react';

function Switcher(props: {[x: string]: any; value: string | number}) {
  return <>{props[props.value]}</>;
}

export default Switcher;
