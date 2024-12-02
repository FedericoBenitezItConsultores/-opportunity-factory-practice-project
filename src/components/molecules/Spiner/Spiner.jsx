import React, { useRef, useEffect, useState } from 'react';
import styles from './Spiner.module.css';
import Group from '../../../assets/svg/Group.svg';

const Spiner = ({ onClose }) => {
  const imageRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false); 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (imageRef.current && !imageRef.current.contains(event.target)) {
        onClose(); 
      }
    };
    const timeout = setTimeout(() => {
      setShowMessage(true); 
    }, 5000); 

    document.addEventListener('mousedown', handleClickOutside);

    
    return () => {
      clearTimeout(timeout); 
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      <div className={styles.icon} ref={imageRef}>
        <img src={Group} alt="Group" />
        
      </div>
        {showMessage && (
          <div className={styles.message}>
            <p>Este proceso puede tardar algunos segundos más, </p>
            <p>por favor espera mientras seguimos realizando la consulta.</p>
          </div>
        )}
    </div>
  );
};

export default Spiner;
