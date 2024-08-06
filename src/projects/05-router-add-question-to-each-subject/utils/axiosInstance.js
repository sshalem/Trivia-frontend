import axios from 'axios';

// /***********************************
//  *   BASE_URL for custom instances
//  ***********************************/

const BASE_URL = 'http://localhost:8080';

// /*******************************
//  *   custom Instances
//  *******************************/

const QuestionController = axios.create({
  baseURL: `${BASE_URL}/question`,
});

export { QuestionController };
