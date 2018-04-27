import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Input } from "semantic-ui-react";
import {connect} from 'react-redux';
import {fetchQuestions} from '../store';

export class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answer: '',
      question: ''
    }
  }


  componentDidMount() {
    if (this.props.loadQuestions){
      this.props.loadQuestions();
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(evt) {
    evt.preventDefault();
    let answer = {
      answer: this.state.answer
    }
  }

  render() {

    const {questions} = this.props;

    return (

      <form onSubmit={this.handleSubmit}>
    <p>Do you prefer morning or night showers?</p>
  <div>
    <input type="radio" id="1" name="contact" value="Morning" />
    <label htmlFor="1">Morning</label>

    <input type="radio" id="2" name="contact" value="Night" />
    <label htmlFor="2">Night</label>

    <input type="radio" id="3" name="contact" value="I don't shower" />
    <label htmlFor="3">I don't shower</label>
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>
      )
    }
  }


  const mapStateToProps = (state) => ({
    questions: state.questions
    })

  const mapDispatchToProps = dispatch => ({
    loadQuestions: () => {
      const action = fetchQuestions();
      return dispatch(action);
    }
  });

  export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
