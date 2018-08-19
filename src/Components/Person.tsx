import * as React from 'react';
import { IPerson } from '../types';

interface IPersonProps {
    info: IPerson;
    onHide: (e: React.MouseEvent) => void;
}

const Person = ({info, onHide}: IPersonProps) => (
  <div>
    <button onClick={onHide}>Hide</button>
    <div>
      {Object.keys(info).map((key: string) => <div key={key}>{key}: {info[key]}</div>)}
    </div>
  </div>
);

export default Person;
