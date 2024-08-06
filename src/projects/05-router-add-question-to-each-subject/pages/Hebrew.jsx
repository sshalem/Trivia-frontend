import React, { useState } from 'react';
import { AddQuestion } from '../pages';
import { Modal } from '../components';

const Hebrew = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div style={{ width: '7rem', height: '10rem' }}>
        <button type="button" className="btn" onClick={handleOpen}>
          הוספת שאלה
        </button>
      </div>
      <Modal isOpen={open} onClose={handleClose}>
        <AddQuestion />
      </Modal>
    </>
  );
};

export default Hebrew;

//  {
//    /* <h1>עברית</h1> */
//  }
//  {
//    /* <section className="modal">
//     <div className="modal-content">
//       <span class="modal-close">&times;</span>
//       <AddQuestion />
//     </div>
//   </section> */
//  }
