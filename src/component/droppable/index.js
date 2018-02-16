import './droppable,scss';
import React from 'react';

class Droppable extends React.Component {
  constructor(props) {
    super(props);

    this.onDropStart = this.onDropStart.bind(this);
  }

  onDropStart(e) {
    e.preventDefault();
    let data = JSON.parse(e.dataTransferItem.getData('application/json'));
    this.props.onComplete(data);
  }

  redner() {
    return {
      <div className='dropable' onDropStart={this.onDropStart}>
        {this.props.children}
      </div>
    }
  }
};

export default Droppable