import React from 'react';
import './slider.css';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.index = 1
  }
  componentDidMount () {
    this.refs.childerns.style.width = this.props.width + 'px'
    this.refs.childerns.style.height = this.props.height + 'px'
    this.time = setTimeout(this.loop.bind(this), this.props.intervalTime);
    this.refs.childerns.addEventListener('transitionend', () => {
      this.time = setTimeout(this.loop.bind(this), this.props.intervalTime);
    })
    if (this.index > 4) {
      this.index = 1;
    }

  }
  loop () {
    this.refs.childerns.style.transform = 'rotateX(' + (- this.index * this.props.deg) + 'deg)';
    this.refs.childerns.style.transition = this.props.transitionTime;
    this.index++;
  }
  render () {
    return <div className='childern' ref='childerns' onMouseover={() => { clearTimeout(this.time); this.time = setTimeout(this.loop.bind(this), 0); }}>
      {this.props.children}
    </div>
  }
}