import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AddQuestion = () => {
  const [answer, setAnswer] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  const handleSelectSubject = (value) => {
    console.log(value);
  };

  const handleOption = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.parentElement);
    console.log(e.target.parentElement.innerText);
  };

  return (
    <>
      <div>
        <NavLink to="/admin" className="nav-link">
          חזרה
        </NavLink>
      </div>
      <br />
      <article>
        <form className="form" onSubmit={handleSubmit}>
          {/* Select */}
          <div className="select-container">
            <span className="select-span">בחירת נושא :</span>
            <select className="" name="" id="" onChange={(e) => handleSelectSubject(e.target.value)}>
              <option className="" value="general">
                כללי
              </option>
              <option className="" value="tanach">
                תנ"ך
              </option>
              <option className="" value="hebrew">
                עברית
              </option>
              <option className="" value="math">
                חשבון
              </option>
              <option className="" value="english">
                אנגלית
              </option>
              <option className="" value="history">
                היסטוריה
              </option>
              <option className="" value="geography">
                גיאוגרפיה
              </option>
            </select>
          </div>
          {/* End Select */}
          {/* Start text area */}
          <div className="form-row">
            <label htmlFor="question" className="form-label">
              שאלה
            </label>
            <textarea id="question" name="question" className="form-textarea" />
          </div>
          {/* End text area */}
          <div className="form-row">כתוב 4 תשובות , ובחר את התשובה הנכונה</div>
          {/* Start radio input options */}
          <div className="form-row">
            <input type="radio" id="options" name="options" className="form-input-option" onChange={(e) => handleOption(e)} />
            <label htmlFor="options" className="form-label-option">
              תשובה א'
            </label>
            <textarea id="question" name="question" className="form-textarea-option" />
          </div>
          <div className="form-row">
            <input type="radio" id="options" name="options" className="form-input-option" onChange={(e) => handleOption(e)} />
            <label htmlFor="options" className="form-label-option">
              תשובה ב'
            </label>
            <textarea id="question" name="question" className="form-textarea-option" />
          </div>
          <div className="form-row">
            <input type="radio" id="options" name="options" className="form-input-option" onChange={(e) => handleOption(e)} />
            <label htmlFor="options" className="form-label-option">
              תשובה ג'
            </label>
            <textarea id="question" name="question" className="form-textarea-option" />
          </div>
          <div className="form-row">
            <input type="radio" id="options" name="options" className="form-input-option" onChange={(e) => handleOption(e)} />
            <label htmlFor="options" className="form-label-option">
              תשובה ד'
            </label>
            <textarea id="question" name="question" className="form-textarea-option" />
          </div>
          {/* End radio input options */}
          <button className="btn" type="submit">
            עדכן
          </button>
        </form>
      </article>
    </>
  );
};

export default AddQuestion;
