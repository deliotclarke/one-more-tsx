import React, { useState, useRef } from 'react';

interface IPerson {
  firstName: string;
  lastName: string;
}

interface Props {
  text?: string;
  ok?: boolean;
  i?: number;
  function?: (bob: string) => string;
  obj?: {
    f1: string;
  };
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = ({ text }) => {
  const [count, setCount] = useState<string>('hello');
  // const inputRef = useRef<HTMLInputElement>(null);
  // const divRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input placeholder={count} onChange={e => setCount(e.target.value)} />
    </div>
  );
};
