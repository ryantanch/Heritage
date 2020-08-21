import React, { Component } from 'react';
import { Form, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class TagsArea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //--------------- Print all tags from the Database ----------/
    let All_Tags = [];
    for (var i = 0; i < this.props.tags.length; i++) {
      All_Tags.push(
        <Badge
          variant="primary"
          style={{ marginLeft: '4px', marginRight: '4px' }}
        >
          {this.props.tags[i]}
        </Badge>
      );
    }

    return (
      <Form>
        <Form.Group controlId="TagArea">
          <h5>
            <div>{All_Tags}</div>
          </h5>
        </Form.Group>
      </Form>
    );
  }
}

export default TagsArea;
