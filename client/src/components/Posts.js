import React from 'react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import PostForm from './PostForm';
import { Container, Header, Segment, Grid, Button, Divider, } from 'semantic-ui-react';

class Posts extends React.Component {
  state ={ showForm: false, };

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm, };
    })
  }

  posts = () => {
    return this.props.posts.map( post =>
      <Grid.Column width={16} key={ post.id }> 
        <Segment raised>
          <Header size='large' textAlign='center'>{post.name}</Header>
          <Header size ='small'>{post.date}</Header>
          {post.body}
            <Button 
              as={Link} 
              to={`/posts/${post.id}`}
              floated='right'
              content='View Post'
            />
            <Divider hidden />
        </Segment>
      </Grid.Column>
    )
  }

  render() {
    const { showForm } = this.state

    return (
      <Container>
        <Header size='huge' textAlign='center'>Posts</Header>
        <Button onClick={this.toggleForm} content='New Post' />
        { showForm ?
          <PostForm closeForm={this.toggleForm} />
        :
          <Grid columns={1}>
            <Grid.Row>
              { this.posts() }
            </Grid.Row>
          </Grid>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts, };
}

export default connect(mapStateToProps)(Posts);