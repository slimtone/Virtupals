import React from 'react';
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
    this.setState({
        [name]: value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.postAnswerThunk({q1: this.state.q1, q2: this.state.q2, q3: this.state.q3, q4: this.state.q4, q5: this.state.q5,  userId: this.props.user.id});
  }

  render() {

    return (

    <form onSubmit={this.handleSubmit}>
    <h3 className="container" >Do you prefer morning or night showers?</h3>
    <p className="container">
          Morning Showers: <input type="radio" onChange={this.handleInputChange} name="q1" value="1" /> <br />
          Night Showers: <input type="radio" onChange={this.handleInputChange} name="q1" value="2" /> <br />
          I don't shower: <input type="radio" onChange={this.handleInputChange} name="q1" value="3" />
    </p>
    <h3 className="container">What color are the majority of your clothes in your closet?</h3>
    <p className="container">
          White: <input type="radio" onChange={this.handleInputChange} name="q2" value="1" /> <br />
          Black: <input type="radio" onChange={this.handleInputChange} name="q2" value="2" /> <br />
          Mixed colors: <input type="radio" onChange={this.handleInputChange} name="q2" value="3" />
    </p>
    <h3 className="container">Do you prefer comedy, horror or no movies at all?
    </h3>
    <p className="container">
          Comedy: <input type="radio" onChange={this.handleInputChange} name="q3" value="1" /> <br />
          Horror: <input type="radio" onChange={this.handleInputChange} name="q3" value="2" /> <br />
          I don't like movies: <input type="radio" onChange={this.handleInputChange} name="q3" value="3" />
    </p>
    <h3 className="container">Do you like partying?
    </h3>
    <p className="container">
          I love parties: <input type="radio" onChange={this.handleInputChange} name="q4" value="1" /> <br />
          Only with friends: <input type="radio" onChange={this.handleInputChange} name="q4" value="2" /> <br />
          Not really: <input type="radio" onChange={this.handleInputChange} name="q4" value="3" />
    </p>
    <h3 className="container">Would you ever cheat on your taxes?
    </h3>
    <p className="container">
          Never, i love my country: <input type="radio" onChange={this.handleInputChange} name="q5" value="1" /> <br />
          Sometimes: <input type="radio" onChange={this.handleInputChange} name="q5" value="2" /> <br />
          All the time: <input type="radio" onChange={this.handleInputChange} name="q5" value="3" />
    </p>
  <input className="container" type="submit" value="Submit" />
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
