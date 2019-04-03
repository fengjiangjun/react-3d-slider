import React from 'react';
import './slider.css';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.index = 1
  }
  componentDidMount () {
    this.time = setTimeout(this.loop.bind(this), 2000);
    this.refs.dd.addEventListener('transitionend', () => {
      this.time = setTimeout(this.loop.bind(this), 2000);
    })

  }
  loop () {
    this.refs.dd.style.transform = 'rotateX(' + (- this.index * 90) + 'deg)';
    this.refs.dd.style.transition = '2s';
    this.index++;
  }
  render () {
    return <div className='a' ref='dd'>
      {this.props.children}
    </div>
  }
}