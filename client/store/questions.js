import axios from 'axios';

//ACTION TYPES
const GET_QUESTIONS = 'GET_QUESTIONS';
const POST_ANSWER = 'POST_ANSWER';

//ACTION CREATORS
export const getQuestions = questions => ({
  type: GET_QUESTIONS,
  questions
})

export const postAnswer = answer => ({
  type: POST_ANSWER,
  answer
})

//THUNK CREATORS
export const fetchQuestions = () => {
  return dispatch => {
    return axios
      .get('/api/questions')
      .then(res => res.data)
      .then(questions => {
        const action = getQuestions(questions);
        dispatch(action);
      })
  }
}

export const createAnswer = (answer) => {
  return dispatch => {
    return axios
      .post('/api/answers', answer)
      .then(res => {
        dispatch(postAnswer(res.data));
      })
  }
}

//REDUCER
export default function questionReducer(state = [], action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions;
    case POST_ANSWER:
      return action.answer;
  default:
      return state;
  }
}
