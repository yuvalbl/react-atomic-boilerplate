import React, {FunctionComponent} from 'react';

interface IProps {
  action: () => any,
}

export const Checkbox: FunctionComponent<IProps> = ({action}) => (
  <input onClick={action}> type="checkbox"></input>
);
