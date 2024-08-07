import React, { useContext, useState } from 'react';
import { QuestionController as questionAxios } from '../utils/axiosInstance';

const currentQuestionId = localStorage.getItem('questionId');

// Setup initial values
// If page is refreshed , this values are loaded
export const initialState = {
  questionId: currentQuestionId || '',
  subject: '',
  question: '',
  answers: [],
  correctAnswer: '',
};

// (1.1) setup app context
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const updateQuestion = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.parentElement);
    // console.log(e.target.parentElement.parentElement);
    // console.log(e.target.parentElement.parentElement.children[2]);
    // console.log(e.target.parentElement.parentElement.children[2].innerText);

    const questionId = e.target.parentElement.parentElement.children[2].innerText;
    // console.log(questionId);

    localStorage.setItem('questionId', questionId);
    setState({ ...state, questionId: questionId });
  };

  const deleteQuestion = async (e) => {
    console.log(e.target.parentElement.parentElement.children[2].innerText);
    const questionId = e.target.parentElement.parentElement.children[2].innerText;
    const { data } = await questionAxios.delete(`/deleteQuestion/${questionId}`);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        updateQuestion,
        deleteQuestion,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

// setup a custom hook for context :
// make sure to add prefix `use` to be `useAppContext`
// (1.3)
export const useAppContext = () => {
  return useContext(AppContext);
};

// (1.4)
export { AppProvider };
