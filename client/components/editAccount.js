import { connect } from 'react-redux';
import React from 'react';
import { Button, Form, Grid, Container, Header } from 'semantic-ui-react';
import { updateUser } from '../store';

export class EditAccount extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: this.props.user.firstName || '',
      lastName: this.props.user.lastName || '',
      addressLine1: this.props.user.addressLine1 || '',
      addressLine2: this.props.user.addressLine2 || '',
      city: this.props.user.city || '',
      state: this.props.user.state || '',
      zip: this.props.user.zip || '',
      phoneNumber: this.props.user.phoneNumber || ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(value);
    this.setState({
        [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.updateUserThunk(this.props.user.id, this.state)
  }

  render() {

    return (
      <Container fluid textAlign='center'>
        <Header size='large'>Edit My Account</Header>
        <Form size='large' onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Grid centered>
              <Grid.Column width='6'  >
                <Grid.Row >
                  <div>
                    <Form.Field label='First name' control='input' placeholder='First name' onChange={this.handleInputChange} name='firstName' />
                  </div>
                  <div>
                    <Form.Field label='Last name' control='input' placeholder='Last name' onChange={this.handleInputChange} name='lastName' />
                  </div>
                </Grid.Row>
                <Grid.Row>
                  <div>
                    <Form.Field label='Address 1' control='input' placeholder='Address 1' onChange={this.handleInputChange} name='addressLine1' />
                  </div>
                  <div>
                    <Form.Field label='Address 2' control='input' placeholder='Address 2' onChange={this.handleInputChange} name='addressLine2' />
                  </div>
                </Grid.Row>
                <Grid.Row>
                  <div>
                    <Form.Field label='City' control='input' placeholder='City' onChange={this.handleInputChange} name='city' />
                    </div>
                  <div>
                    <Form.Field label='State' control='input' placeholder='State' onChange={this.handleInputChange} name='state' />
                    </div>
                </Grid.Row>
                <Grid.Row>
                  <div>
                    <Form.Field label='Zip' control='input' placeholder='Zip' onChange={this.handleInputChange} name='zip' />
                    </div>
                  <div>
                    <Form.Field label='Phone Number' control='input' placeholder='Phone Number' onChange={this.handleInputChange} name='phoneNumber'/>
                  </div>
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </Form.Group>
          <Button id='products' size='large' type='submit' >Submit</Button>
        </Form>
      </Container>
    )
  }
}

// CONTAINER

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    updateUserThunk (id, user) {
      dispatch(updateUser(id, user))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount);
