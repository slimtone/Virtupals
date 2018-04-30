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
    <h3 className="container" >When you’re having a bad day, what do you do to make yourself feel better?</h3>
    <p className="container">
          I look at Thunks and admire how great they are: <input type="radio" onChange={this.handleInputChange} name="q1" value="1" /> <br />
          I redo the TESTING WIKISTACK workshop: <input type="radio" onChange={this.handleInputChange} name="q1" value="2" /> <br />
          Get turnt at Killarney's: <input type="radio" onChange={this.handleInputChange} name="q1" value="3" />
    </p>
    <h3 className="container">What’s the most courageous thing you’ve ever done?</h3>
    <p className="container">
          Presented a poorly made stackathon: <input type="radio" onChange={this.handleInputChange} name="q2" value="1" /> <br />
          Hot Seat: <input type="radio" onChange={this.handleInputChange} name="q2" value="2" /> <br />
          Ice breakers: <input type="radio" onChange={this.handleInputChange} name="q2" value="3" />
    </p>
    <h3 className="container">What is your favorite meal?
    </h3>
    <p className="container">
          Random meal from Mealpal : <input type="radio" onChange={this.handleInputChange} name="q3" value="1" /> <br />
          Bánh mì: <input type="radio" onChange={this.handleInputChange} name="q3" value="2" /> <br />
          Cereal: <input type="radio" onChange={this.handleInputChange} name="q3" value="3" />
    </p>
    <h3 className="container">What would be the worst thing to hear as you are going under anesthesia before heart surgery?
    </h3>
    <p className="container">
          Your code broke: <input type="radio" onChange={this.handleInputChange} name="q4" value="1" /> <br />
          Your favorite Thunk isn't working: <input type="radio" onChange={this.handleInputChange} name="q4" value="2" /> <br />
          There's a massive merge conflict on your PR: <input type="radio" onChange={this.handleInputChange} name="q4" value="3" />
    </p>
    <h3 className="container">What’s your favorite time of the day?
    </h3>
    <p className="container">
          REACTO: <input type="radio" onChange={this.handleInputChange} name="q5" value="1" /> <br />
          REACTO: <input type="radio" onChange={this.handleInputChange} name="q5" value="2" /> <br />
          REACTO: <input type="radio" onChange={this.handleInputChange} name="q5" value="3" />
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
