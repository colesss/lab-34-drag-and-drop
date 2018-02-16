import './_draggable.scss';
import React from 'react';

class Draggable extends React.Component {
  constructor(props) {
    super(props);

    this.onDragStart = onDragStart.bind(this);
  }

  onDragStart(e) {
    e.dataTransferItem.setData('application/json', JSON.stringify(this.props.data));
  }

  render() {
    return (
      <div className='draggable' onDragStart={this.onDragStart}>
        {this.props.childred}
      </div>
    )
  }
};

export default Draggable;