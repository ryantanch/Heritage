import React, { Component } from 'react';
import '../App.css';
import './ProfilePage.css';
import { Badge, Container, CardColumns, Table } from 'react-bootstrap';
import ProfilePic from '../assets/artifact-example.jpg';
import { ArtifactCard } from '../components/ArtifactCard';
import axios from 'axios';


class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data : {}
    }

  }


  componentDidMount() {
    var url = '/api/users/' + this.props.match.params.id;
  
    axios.get(url)  
    .then((resp) => {
        this.setState({data : resp.data[0]})
  
    })

  
  }
  render() {
    var Images =  [];



  
    return (
      <React.Fragment>
        <Container className="profileContainer">
          <div
            className="circleFrame"
            style={{ backgroundImage: 'url(' + ProfilePic + ')' }}
          ></div>
          {/* <h1>Page {this.props.match.params.id} </h1> */}
          <h1>{this.state.data.Firstname + " " + this.state.data.Lastname}  </h1>
          <p>Maiden Name: </p>
          <div className="span-divider"></div>
          <Table>
            <tbody>
              <tr>
                <th>Gender:</th>
                <td>{this.state.data.gender}</td>
              </tr>
              <tr>
                <th>Date of Birth:</th>
                <td>{this.state.data.DOBDay}-{this.state.data.DOBMonth}-{this.state.data.DOBYear}{' '}<Badge variant="secondary">High Accuracy</Badge></td>
              </tr>
              <tr>
                <th>Date of Death:</th>
                <td>{this.state.data.DODDay}-{this.state.data.DODMonth}-{this.state.data.DODYear}{' '}<Badge variant="secondary">Low Accuracy</Badge></td>
              </tr>
            </tbody>
          </Table>
          <div className="span-divider"></div>
          <h4><b>Related artifacts</b></h4>
          <CardColumns className="searchCardCol">
            <ArtifactCard
              title={'Family photo of Theodore and Helen'}
              link="/photos/1"
              img="https://www.dropbox.com/s/wrl246ax7v5x3y3/photo_1-1.jpg?raw=1"
            />
            <ArtifactCard
              title={"Theodore's mother"}
              link="/photos/2"
              img="https://www.dropbox.com/s/l1sfjx7zrz2xal1/photo_2-1.jpg?raw=1"
            />
            <ArtifactCard
              title={'Family in Poland (Theodore and Helen)'}
              link="/photos/3"
              img="https://www.dropbox.com/s/lp083gutbzhx8fp/photo_3-1.jpg?raw=1"
            />
            <ArtifactCard
              title={'Bernard and Friend'}
              link="/photos/4"
              img="https://www.dropbox.com/s/4f2w25j9ahepgqv/photo_4-1.jpg?raw=1"
            />
          </CardColumns>
        </Container>
      </React.Fragment>
    );
  }
}

export default ProfilePage;
