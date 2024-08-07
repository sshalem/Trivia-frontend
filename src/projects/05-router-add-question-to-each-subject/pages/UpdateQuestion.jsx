import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { RADIO_OPTIONS, SUBJECTS } from '../utils/constants';
import { QuestionController as questionAxios } from '../utils/axiosInstance';
import { useAppContext } from '../context/appContext';

const UpdateQuestion = () => {
  const { questionId: id } = useAppContext();

  /**
   * If no option is selected thus "כללי" is chosen ,But,
   * Since it's not triggred , becaues I don't change it , thus it is empty.
   * Thats why I set it as default to be SUBJECTS.general
   */
  const [subject, setSubject] = useState(SUBJECTS.general);
  const [radioOption, setRadioOption] = useState(null);
  const navigate = useNavigate();

  let questionId = useRef(null);
  let question = useRef(null);
  let answerA = useRef(null);
  let answerB = useRef(null);
  let answerC = useRef(null);
  let answerD = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sendData = {
      id: questionId.current.value,
      subject: subject,
      question: question.current.value,
      answers: [answerA.current.value, answerB.current.value, answerC.current.value, answerD.current.value],
      correctAnswer: radioOption,
    };

    const res = await questionAxios.put('/updateQuestion', sendData);
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

  const getQuestion = async () => {
    const { data } = await questionAxios.get(`/getQuestionById/${id}`);
    console.log(data);
    // console.log(data.id);
    // console.log(data.subject);
    setSubject(data.subject);
    questionId.current.value = data.id;
    question.current.value = data.question;
    answerA.current.value = data.answers[0];
    answerB.current.value = data.answers[1];
    answerC.current.value = data.answers[2];
    answerD.current.value = data.answers[3];
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <>
      <div>
        <NavLink to="/admin" className="nav-link-admin">
          חזרה
        </NavLink>
      </div>
      <br />
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title" style={{ backgroundColor: 'yellowgreen' }}>
            {' '}
            שינוי נתונים
          </div>
          {/* Start Id */}
          <br />
          <div className="form-row">
            <label htmlFor="questionId" className="form-label">
              מספר שאלה
            </label>
            <input type="number" id="questionId" name="questionId" className="form-input" ref={questionId} disabled />
          </div>
          {/* End Id */}
          {/* Start Select */}
          <div className="select-container">
            <span className="select-span">בחירת נושא </span>
            <select className="" name="" id="" onChange={(e) => handleSelectSubject(e.target.value)}>
              <option className="" value={SUBJECTS.general}>
                {/* {subject && subject} */}
                {/* Line above does the same as line below */}
                {subject ? subject : `כללי`}
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
          <button className="btn" type="submit" style={{ backgroundColor: 'yellowgreen' }}>
            עדכן שינוי
          </button>
        </form>
      </article>
    </>
  );
};

export default UpdateQuestion;
