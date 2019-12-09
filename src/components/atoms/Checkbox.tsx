import React, {FunctionComponent} from 'react';

interface IProps {
  onClick: () => any,
}

export const Checkbox: FunctionComponent<IProps> = ({onClick}) => (
  <input onClick={onClick} type="checkbox"/>
);
