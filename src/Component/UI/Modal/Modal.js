import React, {Fragment} from 'react';
import './Modal.css'
import Backdrop from "../BackDrop/BackDrop";

const Modal = props => (
    <Fragment>
        <Backdrop show={props.show}
                  onClick={props.close} />
        <div className="Modal" style={{transform: props.show ? "translateY(0)" : "translateX(-100vh)",
            display: props.show ? 'block' : 'none',
        }}>
            {props.children}
        </div>
    </Fragment>
);

export default Modal;