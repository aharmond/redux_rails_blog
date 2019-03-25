import React from 'react';
import { connect, } from 'react-redux';
import { updatePost, addPost, } from '../reducers/posts';
import { Form, Button, TextArea } from 'semantic-ui-react';

class PostForm extends React.Component {
  initialState = {
    name: "",
    date: "",
    body: "",
  }

  state = {...this.initialState};

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props, });
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const post = { ...this.state };
    const { closeForm, dispatch, } = this.props;
    const func = this.props.id ? updatePost : addPost;
    dispatch(func(post));
    closeForm();
  }

  render() {
    const { name, date, body, } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='name'
          required
          defaultValue={name}
          onChange={this.handleChange}
          label='Name'
        />
        <Form.Input
          name='date'
          required
          defaultValue={date}
          onChange={this.handleChange}
          label='Date'
        />
        <Form.Field 
          control={TextArea}
          name='body'
          required
          defaultValue={body}
          onChange={this.handleChange}
        />
        <Form.Field 
          control={Button}
          content='Submit'
        />
      </Form>
    )
  }
}

export default connect()(PostForm);