import * as React from 'react';
import { IPerson } from '../types';
import Result from './Result';
import './styling/Results.scss'

interface IResultProps {
  results: IPerson[];
}

const Results = ({results}: IResultProps) => {
  if (results.length <= 0) {
    return <div>Searching...</div>;
  };

  return (
    <ul>
      {results.map((el: IPerson) => <Result key={el.name.toLowerCase().replace(' ', '_')} content={el}/>)}
    </ul>
  )
}

export default Results;
