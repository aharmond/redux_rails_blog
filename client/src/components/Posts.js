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
        <Segment raised inverted>
          <Header size='large' textAlign='center' inverted color="grey">{post.name}</Header>
          <Header size ='small' inverted color="grey">{post.date}</Header>
          {post.body}
            <Button 
              as={Link} 
              to={`/posts/${post.id}`}
              floated='right'
              content='View Post'
              inverted color="olive"
            />
            <Divider hidden />
        </Segment>
        <Divider hidden />
      </Grid.Column>
    )
  }

  render() {
    const { showForm } = this.state

    return (
      <Container>
        <Header size='huge' textAlign='center' inverted color="grey">Posts</Header>
        <Button onClick={this.toggleForm} content='New Post' inverted color="green" />
        <Divider hidden />
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