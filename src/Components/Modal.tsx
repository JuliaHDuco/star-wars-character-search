import * as React from 'react';
import './styling/Modal.scss';

interface IModalProps {
  children: any;
  onHide: (e: React.MouseEvent) => void;
}

const Modal = ({children, onHide}: IModalProps) => {
  return (
    <div className='modal-wrapper'>
      <div className='modal'>
        <button onClick={onHide} />
        {children}
      </div>
    </div>
  );
}

export default Modal;
