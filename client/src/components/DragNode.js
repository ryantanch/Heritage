import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { TreeNode } from '../components/TreeNode';

class DragNode extends Component {
    render() {
        return (
             <Draggable>
                <div>
                     <TreeNode name = {"Draggable"} gender = "male" src="https://www.datocms-assets.com/10869/1554107337-kg-at-fronteers-closeup.jpg?auto=compress&fit=crop&fm=jpg&h=300&w=300"/>
                </div>
             </Draggable>
            
        );
    }
}

export default DragNode;