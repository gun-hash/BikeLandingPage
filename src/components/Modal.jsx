import React from 'react';
import BikeVideo from '../assets/bikevid.mp4';
import CancelIcon from '@mui/icons-material/Cancel';
import '../App.css';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <CancelIcon/>
        </button>
        <div className="video-container">
          <video controls autoPlay>
            <source src={BikeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Modal;
