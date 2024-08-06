import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { RADIO_OPTIONS, SUBJECTS } from '../utils/constants';
import { QuestionController as questionAxios } from '../utils/axiosInstance';

const AddQuestion = () => {
  /**
   * If no option is selected thus "כללי" is chosen ,But,
   * Since it's not triggred , becaues I don't change it , thus it is empty.
   * Thats why I set it as default to be SUBJECTS.general
   */

  const [subject, setSubject] = useState(SUBJECTS.general);
  const [radioOption, setRadioOption] = useState(null);
  const navigate = useNavigate();

  const question = useRef(null);
  const answerA = useRef(null);
  const answerB = useRef(null);
  const answerC = useRef(null);
  const answerD = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sendData = {
      subject: subject,
      question: question.current.value,
      answers: [answerA.current.value, answerB.current.value, answerC.current.value, answerD.current.value],
      correctAnswer: radioOption,
    };

    const res = await questionAxios.post('/addQuestion', sendData);
    console.log(res);
    navigate('/admin/question-list');
  };

  const handleSelectSubject = (value) => {
    /**
     * If no option is selected thus "כללי" is chosen ,But,
     * Since it's not triggred , becaues I don't change it , thus it is empty.
     * Thats why I set it as default to be SUBJECTS.general
     */
    setSubject(value);
  };

  const handleOption = (e) => {
    switch (e.target.parentElement.innerText) {
      case RADIO_OPTIONS.A:
        setRadioOption(RADIO_OPTIONS.A);
        break;
      case RADIO_OPTIONS.B:
        setRadioOption(RADIO_OPTIONS.B);
        break;
      case RADIO_OPTIONS.C:
        setRadioOption(RADIO_OPTIONS.C);
        break;
      case RADIO_OPTIONS.D:
        setRadioOption(RADIO_OPTIONS.D);
        break;
    }
  };

  return (
    <>
      <div>
        <NavLink to="/admin" className="nav-link">
          חזרה
        </NavLink>
      </div>
      {/* <br /> */}
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title"> הוספת שאלה</div>
          {/* Select */}
          <div className="select-container">
            <span className="select-span">בחירת נושא </span>
            <select className="" name="" id="" onChange={(e) => handleSelectSubject(e.target.value)}>
              <option className="" value={SUBJECTS.general}>
                כללי
              </option>
              <option className="" value={SUBJECTS.tanach}>
                תנ"ך
              </option>
              <option className="" value={SUBJECTS.hebrew}>
                עברית
              </option>
              <option className="" value={SUBJECTS.math}>
                חשבון
              </option>
              <option className="" value={SUBJECTS.english}>
                אנגלית
              </option>
              <option className="" value={SUBJECTS.history}>
                היסטוריה
              </option>
              <option className="" value={SUBJECTS.geography}>
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
            <textarea id="question" name="question" className="form-textarea" ref={question} />
          </div>
          {/* End text area */}
          <div className="form-row">כתוב 4 תשובות , ובחר את התשובה הנכונה</div>
          {/* Start radio input options */}
          <div className="form-row">
            <input type="radio" id="options" name="options" className="form-input-option" onChange={(e) => handleOption(e)} />
            <label htmlFor="options" className="form-label-option">
              תשובה א'
            </label>
            <textarea id="question" name="question" className="form-textarea-option" ref={answerA} />
          </div>
          <div className="form-row">
            <input type="radio" id="options" name="options" className="form-input-option" onChange={(e) => handleOption(e)} />
            <label htmlFor="options" className="form-label-option">
              תשובה ב'
            </label>
            <textarea id="question" name="question" className="form-textarea-option" ref={answerB} />
          </div>
          <div className="form-row">
            <input type="radio" id="options" name="options" className="form-input-option" onChange={(e) => handleOption(e)} />
            <label htmlFor="options" className="form-label-option">
              תשובה ג'
            </label>
            <textarea id="question" name="question" className="form-textarea-option" ref={answerC} />
          </div>
          <div className="form-row">
            <input type="radio" id="options" name="options" className="form-input-option" onChange={(e) => handleOption(e)} />
            <label htmlFor="options" className="form-label-option">
              תשובה ד'
            </label>
            <textarea id="question" name="question" className="form-textarea-option" ref={answerD} />
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
