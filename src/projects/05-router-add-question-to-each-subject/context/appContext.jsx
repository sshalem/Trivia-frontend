import React, { useContext, useState } from 'react';

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
    console.log(e);
    console.log(e.target.parentElement.parentElement.children[1].innerText);

    const questionId = e.target.parentElement.parentElement.children[1].innerText;
    localStorage.setItem('questionId', questionId);
    setState({ ...state, questionId: questionId });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        updateQuestion,
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
