import {ChangeEvent, useState} from 'react';

export function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value);
  return {onChange, value}
}

