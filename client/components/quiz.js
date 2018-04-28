import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Input } from "semantic-ui-react";
import {connect} from 'react-redux';
import {fetchQuestions, createAnswer} from '../store';

export class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      question: ''
    }
  }

  componentDidMount() {
    if (this.props.loadQuestions){
      this.props.loadQuestions();
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(name, value)
    this.setState({
        [name]: value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log('PROPS', this.props.questions[0].id);
    this.props.postAnswerThunk({q1: this.state.q1, q2: this.state.q2, q3: this.state.q3,  userId: this.props.user.id});
  }

  render() {
    const {questions} = this.props;

    return (

    <form onSubmit={this.handleSubmit}>
    <p id="0">Do you prefer morning or night showers?</p>
    <p>
          Morning Showers: <input type="radio" onChange={this.handleInputChange} name="q1" value="1" /> <br />
          Night Showers: <input type="radio" onChange={this.handleInputChange} name="q1" value="2" /> <br />
          I don't shower: <input type="radio" onChange={this.handleInputChange} name="q1" value="3" />
    </p>
    <p>What color are the majority of your clothes in your closet?</p>
    <p>
          White: <input type="radio" onChange={this.handleInputChange} name="q2" value="1" /> <br />
          Black: <input type="radio" onChange={this.handleInputChange} name="q2" value="2" /> <br />
          Mixed colors: <input type="radio" onChange={this.handleInputChange} name="q2" value="3" />
    </p>
    <p style={{color: 'red'}}>Do you prefer smart comedy, stupid/silly comedy or no comedy at all?
    </p>
    <p>
          Smart comedy: <input type="radio" onChange={this.handleInputChange} name="q3" value="1" /> <br />
          Stupid comedy: <input type="radio" onChange={this.handleInputChange} name="q3" value="2" /> <br />
          What's comedy?: <input type="radio" onChange={this.handleInputChange} name="q3" value="3" />
    </p>
  <input type="submit" value="Submit" />
  </form>
      )
    }
  }


  const mapStateToProps = (state) => ({
    user: state.user,
    questions: state.questions
    })

  const mapDispatchToProps = dispatch => ({
    loadQuestions: () => {
      const action = fetchQuestions();
      return dispatch(action);
    },
    postAnswerThunk: (answer, userId) => {
      const action = createAnswer(answer, userId);
      return dispatch(action);
    }
  });

  export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
