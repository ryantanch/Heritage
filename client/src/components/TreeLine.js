import React, { Component } from "react";

class TreeLine extends Component {
    constructor(props){
        super(props);
    }

    render(){
        // console.log(this.props.startX +"," +this.props.startY + " " + this.props.endX  +"," +this.props.endY);
        return(
            <div>
                    <svg height={this.props.height} width={this.props.width}>
                        <polyline 
                            // points={this.props.startX +"," +this.props.startY + " " 
                            //         + this.props.point2X +"," +this.props.point2Y + " "
                            //         + this.props.point3X +"," +this.props.point3Y + " "
                            //         + this.props.endX  +"," +this.props.endY} 
                            points = {this.props.startPoint + " "+ this.props.point2 + " "+ this.props.point3 + " "+ this.props.endPoint}
                            // points="0,0 125,0 125,125 250,125"
                            stroke="#4d2800" 
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>
        );
    }
}
export default TreeLine;