import * as React from 'react';
import { IPerson } from '../types';
import './styling/Person.scss';
import Modal from './Modal';

interface IPersonProps {
    info: IPerson;
    onHide: (e: React.MouseEvent) => void;
}

const Person = ({info, onHide}: IPersonProps) => {
  const formatKey = (key: string) => {
    let formattedKey = key.replace(/^\w/, (character) => character.toUpperCase());

    formattedKey = formattedKey.replace('_', ' ');
    return formattedKey;
  }

  const keysToShow = [
    'name',
    'height',
    'mass',
    'hair_color',
    'skin_color',
    'eye_color',
    'birth_year',
    'gender',
  ]

  return (
    <Modal onHide={onHide}>
      <div className='person'>
        <ul>
          {
            Object.keys(info).map((key: string) => {
              if (keysToShow.includes(key)) {
                return (
                  <li key={key}>
                    {formatKey(key)}: {info[key]}
                  </li>)
              }

              return null;
            })
          }
        </ul>
      </div>
    </Modal>
  );
}

export default Person;
