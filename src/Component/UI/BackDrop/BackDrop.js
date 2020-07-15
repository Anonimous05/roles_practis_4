import React from 'react';
import './BackDrop.css';

const Backdrop = ({show, onClick}) => (
    show ? <div className="Backdrop" onClick={onClick}/> : null
);

export default Backdrop;