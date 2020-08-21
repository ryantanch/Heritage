import React, { Component } from "react";
import ArtifactCard from "../components/ArtifactCard";

class artifact_cat extends Component {
  render() {
    
    return (
      <div>
        
        <h1> { this.props.match.params.category + " general page"} </h1>


        <ArtifactCard title = {'Longest restaurant name in Scotland' } link = '/photos/1' />

      </div>
    );
  }
}

export default artifact_cat;
