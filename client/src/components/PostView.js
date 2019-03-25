import React from 'react';
import { connect, } from 'react-redux';
import { Header, Container, Segment, Divider, Button, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import { deletePost, } from '../reducers/posts';
import PostForm from './PostForm';

class PostView extends React.Component {
  state = { showForm: false };

  handleDelete = () => {
    const { post, dispatch, history: { push, }, } = this.props;
    dispatch(deletePost(post.id));
    push('/posts');
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm, };
    })
  }

  render() {
    const { showForm, } = this.state;
    const { post = {}, } = this.props;

    return (
      <Container>
        <Button as={Link} to="/posts" content="Back to Post Index" floated="left" />
        <Button onClick={this.toggleForm} content="Edit Post" />
        <Button onClick={this.handleDelete} content="Delete Post" />
        { showForm ?
          <PostForm {...post} closeForm={this.toggleForm} />
        :
          <div>
            <Header size="huge" textAlign="center">{post.name}</Header>
            <Segment raised>
              <Header size="medium">{post.date}</Header>
                <Divider />
              {post.body}
            </Segment>
          </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { post: state.posts.find( p => p.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(PostView);