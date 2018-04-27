import axios from 'axios';

//ACTION TYPES
const GET_QUESTIONS = 'GET_QUESTIONS';

//ACTION CREATORS
export const getQuestions = questions => ({
  type: GET_QUESTIONS,
  questions
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

//REDUCER
export default function questionReducer(state = [], action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions;
  default:
      return state;
  }
}
