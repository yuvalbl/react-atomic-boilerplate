import React, {FunctionComponent} from 'react';

interface IProps {
  text: string,
  action: () => any,
}

export const Button: FunctionComponent<IProps> = ({text,action}) => (
  <button onClick={action}>{text}</button>
);
